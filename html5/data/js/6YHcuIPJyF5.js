window.globalProvideData('slide', '{"title":"2. APA PENGALAMAN BERKESAN SELAMA BELAJAR?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide14","width":1280,"height":960,"resume":true,"background":{"type":"swf","imagedata":{"assetId":23,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6YHcuIPJyF5","actionGroups":{"ReviewInt_5qTn7TMb3tx":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"63JZGSTjafY"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5qTn7TMb3tx","typea":"var","valueb":"6Zt2UrbXUFy","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Zt2UrbXUFy.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5qTn7TMb3tx"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Zt2UrbXUFy.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5qTn7TMb3tx"}]}]}]},"ReviewIntCorrectIncorrect_5qTn7TMb3tx":{"kind":"actiongroup","actions":[]},"AnsweredInt_5qTn7TMb3tx":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5qTn7TMb3tx"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100101"}]}]},"DisableChoices_5qTn7TMb3tx":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"63JZGSTjafY"},"enabled":{"type":"boolean","value":false}}]},"5qTn7TMb3tx_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6PfVK4FqJBp.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5qTn7TMb3tx"}]}]},"SetLayout_pxabnsnfns00001100101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100101"}]}]},"NavigationRestrictionNextSlide_6YHcuIPJyF5":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5u75PfwEPW9"}}]},"NavigationRestrictionPreviousSlide_6YHcuIPJyF5":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00001100101"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5bNXv756lNE","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5bNXv756lNE","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5qTn7TMb3tx","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5qTn7TMb3tx"}],"elseActions":[{"kind":"exe_actiongroup","id":"5qTn7TMb3tx_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5qTn7TMb3tx","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5qTn7TMb3tx","typea":"var","valueb":"6Zt2UrbXUFy","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Zt2UrbXUFy"},"completed_slide_ref":{"type":"string","value":"_player.6BYPNAqdexy.5nj2hosblsR"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5qTn7TMb3tx","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5qTn7TMb3tx","typea":"var","valueb":"6Zt2UrbXUFy","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Zt2UrbXUFy"},"completed_slide_ref":{"type":"string","value":"_player.6BYPNAqdexy.5nj2hosblsR"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6YHcuIPJyF5"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6YHcuIPJyF5"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"63JZGSTjafY"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6U8L31oenI2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"685EbBxVTi2"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry5","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":256,"placeholder":"type your text here","fontsize":29,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":232,"yPos":464,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":423.5,"rotateYPos":31.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"63JZGSTjafY","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":828,"height":64,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":253,"bottom":39,"pngfb":false,"pr":{"l":"Lib","i":37}}},"html5data":{"xPos":-1,"yPos":-1,"width":849,"height":65,"strokewidth":1}},"width":848,"height":64,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":849,"bottom":65,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":36}}},"id":"63JZGSTjafY","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry5","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.6PfVK4FqJBp"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6U8L31oenI2_2089299143","id":"01","linkId":"txt__default_6U8L31oenI2","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":694,"bottom":128,"pngfb":false,"pr":{"l":"Lib","i":45}}}],"shapemaskId":"","xPos":296,"yPos":312,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":356,"rotateYPos":66,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":712,"bottom":132,"altText":"2. APA PENGALAMAN BERKESAN SELAMA BELAJAR?","pngfb":false,"pr":{"l":"Lib","i":38}},"html5data":{"xPos":-1,"yPos":-1,"width":713,"height":133,"strokewidth":0}},"width":712,"height":132,"resume":true,"useHandCursor":true,"id":"6U8L31oenI2"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":904,"yPos":664,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":55.5,"rotateYPos":43.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":113,"bottom":89,"altText":"Right Arrow 1","pngfb":false,"pr":{"l":"Lib","i":40}},"html5data":{"xPos":-1,"yPos":-1,"width":113,"height":89,"strokewidth":1}},"width":112,"height":88,"resume":true,"useHandCursor":true,"id":"685EbBxVTi2","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6BYPNAqdexy.5u75PfwEPW9"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5qTn7TMb3tx_CorrectReview","id":"01","linkId":"5qTn7TMb3tx_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":42}}}],"shapemaskId":"","xPos":0,"yPos":920,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":41}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"5qTn7TMb3tx_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5qTn7TMb3tx_IncorrectReview","id":"01","linkId":"5qTn7TMb3tx_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":44}}}],"shapemaskId":"","xPos":0,"yPos":920,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"5qTn7TMb3tx_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');