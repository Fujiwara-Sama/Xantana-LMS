window.globalProvideData('slide', '{"title":"Sebuah lapangan luas 1.031 m2 dengan panjang 34 m. Hitunglah diagonal bidang dari lapangan tersebut…","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide2","width":1024,"height":768,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6AKDJLKxXLw","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5iejR3Lw82F.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.5WAvmEDxloN"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6qzq7MEPQx3.InvalidPromptSlide"}}]}]},"ReviewInt_6aFpLcty5HM":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5iejR3Lw82F"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5WAvmEDxloN.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aFpLcty5HM_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aFpLcty5HM_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_6aFpLcty5HM":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aFpLcty5HM_ReviewShape"}}]},"AnsweredInt_6aFpLcty5HM":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6aFpLcty5HM"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6aFpLcty5HM":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5iejR3Lw82F"},"enabled":{"type":"boolean","value":false}}]},"6aFpLcty5HM_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6GW90cUt9IY","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5WAvmEDxloN.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5o477yt1XHp.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6aFpLcty5HM"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5WAvmEDxloN.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5WAvmEDxloN.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6aFpLcty5HM"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6AKDJLKxXLw":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_6AKDJLKxXLw":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6aFpLcty5HM","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"5WAvmEDxloN.$Status","typea":"property","valueb":"incomplete","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"5WAvmEDxloN.$Status","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.#5o477yt1XHp_RetryModeFirstSlideJump","typea":"var","valueb":false,"typeb":"boolean"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.5o477yt1XHp_RetryModeFirstSlideJump","operator":"set","value":{"type":"boolean","value":true}},{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":"incomplete"}],"elseActions":[{"kind":"adjustvar","variable":"_player.5o477yt1XHp_RetryModeFirstSlideJump","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5WAvmEDxloN.$Status","typea":"property","valueb":"incomplete","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"5WAvmEDxloN.$Status","typea":"property","valueb":"","typeb":"string"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.6AKDJLKxXLw_RetryModeInteractionIncompleteOnLoad","operator":"set","value":{"type":"boolean","value":true}}],"elseActions":[{"kind":"adjustvar","variable":"_player.6AKDJLKxXLw_RetryModeInteractionIncompleteOnLoad","operator":"set","value":{"type":"boolean","value":false}}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6qzq7MEPQx3","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6qzq7MEPQx3","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#5o477yt1XHp_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.5o477yt1XHp_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#5o477yt1XHp_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6aFpLcty5HM"}]},{"kind":"showtimer","id":"_player.5o477yt1XHp_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6GW90cUt9IY","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6aFpLcty5HM"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6GW90cUt9IY","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5o477yt1XHp.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6aFpLcty5HM"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5o477yt1XHp.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6aFpLcty5HM"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6aFpLcty5HM_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6aFpLcty5HM","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6aFpLcty5HM","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":"incomplete"}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6AKDJLKxXLw"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6AKDJLKxXLw"}]},{"kind":"onbeforeslidejump","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#6AKDJLKxXLw_RetryModeInteractionIncompleteOnLoad","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5WAvmEDxloN.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"5WAvmEDxloN.$Status","typea":"property","valueb":"incorrect","typeb":"string"}]}]}},"thenActions":[{"kind":"cancel_event"},{"kind":"adjustvar","variable":"_player.6AKDJLKxXLw_RetryModeInteractionIncompleteOnLoad","operator":"set","value":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6aFpLcty5HM","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":"incomplete"}],"elseActions":[]}]}]}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":111,"id":"69Wf3MgB4LX"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":217359,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68WtPcf1d6U"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6aFpLcty5HM_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5iejR3Lw82F"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6IDviM3Ec3J"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VibGa3Os2T"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5z8POnavQtR"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":25,"id":"01","url":"story_content/6lhx94xHk6j_80_DX2048_DY2048.swf","type":"normal","altText":"Evaluasi.png","width":1024,"height":768,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":384,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1024,"bottom":768,"altText":"Evaluasi.png","pngfb":false,"pr":{"l":"Lib","i":89}},"html5data":{"xPos":0,"yPos":0,"width":1024,"height":768,"strokewidth":0}},"width":1024,"height":768,"resume":true,"useHandCursor":true,"id":"68WtPcf1d6U"},{"kind":"textinput","bindto":"_player.NumericEntry","align":"left","verticalAlign":"top","rtl":false,"numeric":true,"multiline":false,"maxchars":0,"placeholder":"","fontsize":23,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":240,"yPos":328,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":122,"rotateYPos":22.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5iejR3Lw82F","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":224,"height":46,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":160}}},"html5data":{"xPos":0,"yPos":0,"width":245,"height":46,"strokewidth":1}},"width":245,"height":46,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":246,"bottom":47,"altText":"Numeric Entry","pngfb":false,"pr":{"l":"Lib","i":494}}},"id":"5iejR3Lw82F","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.NumericEntry","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6IDviM3Ec3J_1249792913","id":"01","linkId":"txt__default_6IDviM3Ec3J","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":904,"bottom":101,"pngfb":false,"pr":{"l":"Lib","i":496}}}],"shapemaskId":"","xPos":51,"yPos":199,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":461,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":922,"bottom":105,"altText":"Sebuah lapangan luas 1.031 m2 dengan panjang 34 m. Hitunglah diagonal bidang dari lapangan tersebut…","pngfb":false,"pr":{"l":"Lib","i":495}},"html5data":{"xPos":0,"yPos":0,"width":922,"height":105,"strokewidth":0}},"width":922,"height":105,"resume":true,"useHandCursor":true,"id":"6IDviM3Ec3J"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6Tlngt24xUT_-295988387","id":"01","linkId":"txt__default_5VibGa3Os2T","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":167,"bottom":43,"pngfb":false,"pr":{"l":"Lib","i":502}}}],"shapemaskId":"","xPos":504,"yPos":328,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":108,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":497}},"html5data":{"xPos":0,"yPos":0,"width":216,"height":48,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":497}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":498}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":497}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":497}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":498}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":499}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":500}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":501}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":499}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":499}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":217,"bottom":49,"altText":"Jawab","pngfb":false,"pr":{"l":"Lib","i":501}},"html5data":{"xPos":-1,"yPos":-1,"width":218,"height":50,"strokewidth":1}}}],"width":216,"height":48,"resume":true,"useHandCursor":true,"id":"5VibGa3Os2T","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"_parent.5iejR3Lw82F.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5WAvmEDxloN"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6qzq7MEPQx3.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5z8POnavQtR_-506111171","id":"01","linkId":"txt__default_5z8POnavQtR","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":282,"bottom":57,"pngfb":false,"pr":{"l":"Lib","i":105}}}],"shapemaskId":"","xPos":64,"yPos":40,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":380,"rotateYPos":30.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":760,"bottom":61,"altText":"SOAL EVALUASI","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":0,"yPos":0,"width":760,"height":61,"strokewidth":0}},"width":760,"height":61,"resume":true,"useHandCursor":true,"id":"5z8POnavQtR"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6aFpLcty5HM_CorrectReview","id":"01","linkId":"6aFpLcty5HM_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":554,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":491}}}],"shapemaskId":"","xPos":0,"yPos":728,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1024,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":490}},"html5data":{"xPos":1,"yPos":1,"width":1021,"height":37,"strokewidth":2}},"width":1024,"height":40,"resume":false,"useHandCursor":true,"id":"6aFpLcty5HM_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6aFpLcty5HM_IncorrectReview","id":"01","linkId":"6aFpLcty5HM_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":563,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":493}}}],"shapemaskId":"","xPos":0,"yPos":728,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1024,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":492}},"html5data":{"xPos":1,"yPos":1,"width":1021,"height":37,"strokewidth":2}},"width":1024,"height":40,"resume":false,"useHandCursor":true,"id":"6aFpLcty5HM_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6aFpLcty5HM_ReviewShape","id":"01","linkId":"txt_6aFpLcty5HM_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":428,"bottom":460,"pngfb":false,"pr":{"l":"Lib","i":504}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":5,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":460.5,"rotateYPos":301.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1004,"bottom":464,"altText":"","pngfb":false,"pr":{"l":"Lib","i":503}},"html5data":{"xPos":1,"yPos":1,"width":1002,"height":462,"strokewidth":1}},"width":921,"height":603,"resume":false,"useHandCursor":true,"id":"6aFpLcty5HM_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');