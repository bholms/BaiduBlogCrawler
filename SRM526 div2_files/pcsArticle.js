/*! 7940 2015-3-4 14:45:26 */
define("pjt/site/page/pcsArticle",["lib/jquery/1_9","lib/jh","kit/loadElm","kit/fitImageWidth"],function(i,t,e,n){var a=function(){var a={},c={},r=function(){n({width:800,imgs:t.e("#detailArticleContent_ptkaiapt4bxy_baiduscarticle").getElementsByTagName("img")}),e(i("#pcsArticle_ptkaiapt4bxy_baiduscarticle")[0],a)};return a.bindEvent=function(){i(a.node.complaintBtn).on("click",function(t){a.node.addAskParam.value=JSON.stringify({url:location.href,res_dec:a.node.linkSrc.href,content:"null"}),a.node.addAskForm.submit(),a.node.complaintTips.innerHTML="已收到您提交的URL, 要反馈更多问题请继续点击这里",i(a.node.complaintTips).hide(),i(a.node.qingtingTips).show(),t.preventDefault()})},r(),c};return a}),requirejs(["pjt/site/page/pcsArticle"],function(i){i()});