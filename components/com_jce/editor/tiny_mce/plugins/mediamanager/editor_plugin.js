/* jce - 2.7.16 | 2019-08-15 | https://www.joomlacontenteditor.net | Copyright (C) 2006 - 2019 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){tinymce.each;tinymce.create("tinymce.plugins.MediaManagerPlugin",{init:function(ed,url){function isMediaElm(n){return"IMG"==n.nodeName&&/mce-item-(flash|shockwave|windowsmedia|quicktime|realmedia|divx|silverlight|audio|video|iframe)/.test(n.className)}function isPopup(n){return!!ed.dom.is(n,"a.jcepopup")&&(/(flash|quicktime|director|shockwave|windowsmedia|mplayer|real|realaudio|divx|video|audio)/.test(n.type)||/(youtube|google|metacafe)/.test(n.href))}var t=this;t.editor=ed,t.url=url,ed.addCommand("mceMediaManager",function(){var se=ed.selection,n=se.getNode();isPopup(n)&&se.select(n),ed.windowManager.open({file:ed.getParam("site_url")+"index.php?option=com_jce&task=plugin.display&plugin=mediamanager",width:780+ed.getLang("mediamanager.delta_width",0),height:680+ed.getLang("mediamanager.delta_height",0),inline:1,popup_css:!1,size:"mce-modal-portrait-full"},{plugin_url:url})}),ed.addButton("mediamanager",{title:"mediamanager.desc",cmd:"mceMediaManager"}),ed.onNodeChange.add(function(ed,cm,n){cm.setActive("mediamanager",isMediaElm(n)||isPopup(n))}),ed.onInit.add(function(){ed&&ed.plugins.contextmenu&&ed.plugins.contextmenu.onContextMenu.add(function(th,m,e){m.add({title:"mediamanager.desc",icon:"mediamanager",cmd:"mceMediaManager"})})})}}),tinymce.PluginManager.add("mediamanager",tinymce.plugins.MediaManagerPlugin,["media"])}();