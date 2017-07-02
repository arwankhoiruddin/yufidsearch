searchYufid = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "http://yufid.com/result/?search=" + query});
};


chrome.contextMenus.create({
  title: "Cari -%s- di Yufid",
  contexts:["selection"],
  onclick: searchYufid
});
