Zotero.ZoteroSampPlugin = {
  DB: null,
  init: function () {
    this.DB = new Zotero.DBConnection('samplePluginCrawler'); // Connect to samplePluginCrawler.sqlite in Zotero directory

    if(!this.DB.tableExists('changes')) {
      this.DB.query("CREATE TABLE changes (num INT)");
      this.DB.query("INSERT INTO changes VALUES (0)");
    }
    // Register callback as an item observer
    var notifierID = Zotero.Notifier.registerObserver(this.notifierCallback, ['item']);

    window.addEventListener('unload', function(e)) {
      Zotero.Notifier.unregisterObserver(notifierID);
    }, false);
  },

  insertSample: function() {
    var data = {
      title: "Zotero",
      company: "CSE 485 Web Crawler Team",
      creator: [
        ['Briar', 'Carlile', 'developer']
        ['Matthew', 'Huff', 'developer']
        ['Bo', 'Johnson', 'devloper']
        ['Somesh', 'Singh', 'developer']
        ['Yimin', 'Wang', 'project owner']
      ],
      version: '0.1',
    };
    Zotero.Items.add('computerProgram', data);
  },
  notifierCallback: {
    notify: function(event, type, ids, extraData) {
      Zotero.ZoteroSampPlugin.DB.query("UPDATE changes"); // Increment a counter every time an item is changed
      if (event == 'add') {
        // Retrieve the added/modified items as Item objects
        // Could we add new Zotero article data to the database here?
        var items = Zotero.Items.get(ids);
      }
    }
  }
};
// plugin INIT
window.addEventListener('load', function(e) { ZoteroSampPlugin.init(); }, false);
