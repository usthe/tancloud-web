"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[836],{4641:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"/2022/01/30/hertz-beat","metadata":{"permalink":"/en/blog/2022/01/30/hertz-beat","editUrl":"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-blog/2022-01-30-hertz-beat.md","source":"@site/i18n/en/docusaurus-plugin-content-blog/2022-01-30-hertz-beat.md","title":"\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edfHertzBeat","description":"\u6613\u7528\u53cb\u597d\u7684\u9ad8\u6027\u80fd\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf\u3002","date":"2022-01-30T00:00:00.000Z","formattedDate":"January 30, 2022","tags":[{"label":"integrate","permalink":"/en/blog/tags/integrate"}],"readingTime":4.15,"truncated":false,"authors":[{"name":"tom","title":"Tancloud","url":"https://github.com/tomsun28","imageURL":"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}]},"content":"> \u6613\u7528\u53cb\u597d\u7684\u9ad8\u6027\u80fd\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf\u3002\\n\\n![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/web-monitor.svg)\\n![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/ping-connect.svg)\\n![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/port-available.svg)\\n![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/database-monitor.svg)\\n![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/custom-monitor.svg)\\n![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/threshold.svg)\\n![tan-cloud](https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/alert.svg)\\n\\n## \ud83d\udceb \u524d\u8a00\\n\\n> \u6bd5\u4e1a\u540e\u6295\u5165\u5f88\u591a\u4e1a\u4f59\u65f6\u95f4\u4e5f\u505a\u4e86\u4e00\u4e9b\u5f00\u6e90\u9879\u76ee,[Sureness](https://github.com/dromara/sureness) [Bootshiro](https://gitee.com/tomsun28/bootshiro) [Issues-translate-action](https://github.com/usthe/issues-translate-action) ,\\n> \u5f53\u65f6\u4e0a\u73ed\u6709\u7a7a\u5c31\u56de\u7b54\u7f51\u53cb\u95ee\u9898\uff0c\u4e0b\u73ed\u56de\u5bb6\u5199\u5f00\u6e90\u4ee3\u7801\uff0c\u8fdc\u7a0b\u5e2e\u4eba\u770b\u95ee\u9898\uff0c\u8fd8\u603b\u611f\u89c9\u65f6\u95f4\u4e0d\u591f\u7528\uff0c\u5f53\u65f6\u60f3\u5982\u679c\u4e0d\u53bb\u4e0a\u73ed\u80fd\u505a\u81ea\u5df1\u70ed\u7231\u7684\u8be5\u591a\u597d\u3002  \\n> \u5e74\u8f7b\u5c31\u8981\u6298\u817e\uff0c\u4f55\u51b5\u8fd8\u662f\u81ea\u5df1\u5f88\u60f3\u505a\u7684\u3002\u4e8e\u662f\u4e4e\uff0c21\u5e74\u5e95\u6211\u653e\u5f03\u6fc0\u52b1\u88f8\u8f9e\u5f00\u59cb\u5168\u804c\u5f00\u6e90\u4e86(\u8fd9\u91cc\u611f\u8c22\u8001\u5a46\u5927\u4eba\u7684\u5168\u529b\u652f\u6301)\uff0c\u4e5f\u662f\u7b2c\u4e00\u6b21\u5168\u804c\u521b\u4e1a\u3002\\n> \u81ea\u5df1\u5728APM\u9886\u57df\u505a\u4e86\u591a\u5e74\uff0c\u5f53\u7136\u8fd9\u6b21\u521b\u4e1a\u52a0\u5f00\u6e90\u7684\u65b9\u5411\u4e5f\u5c31\u662f\u8001\u672c\u884cAPM\u76d1\u63a7\u7cfb\u7edf\uff0c\u6211\u4eec\u5f00\u53d1\u4e00\u4e2a\u652f\u6301\u591a\u79cd\u76d1\u63a7\u6307\u6807(\u66f4\u591a\u76d1\u63a7\u7c7b\u578b\u6307\u6807\u6b63\u5728\u9002\u914d\u4e2d)\uff0c\u62e5\u6709\u81ea\u5b9a\u4e49\u76d1\u63a7\uff0c\u652f\u6301\u9608\u503c\u544a\u8b66\u901a\u77e5\u7b49\u529f\u80fd\uff0c\u9762\u5411\u5f00\u53d1\u8005\u53cb\u597d\u7684\u5f00\u6e90\u76d1\u63a7\u9879\u76ee-HertzBeat\u8d6b\u5179\u8df3\u52a8\u3002\\n> \u60f3\u5230\u5f88\u591a\u5f00\u53d1\u8005\u548c\u56e2\u961f\u62e5\u6709\u4e91\u4e0a\u8d44\u6e90\uff0c\u53ef\u80fd\u53ea\u9700\u8981\u4f7f\u7528\u76d1\u63a7\u670d\u52a1\u800c\u5e76\u4e0d\u60f3\u90e8\u7f72\u76d1\u63a7\u7cfb\u7edf\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u53ef\u4ee5\u76f4\u63a5\u767b\u9646\u4f7f\u7528\u7684SAAS\u4e91\u76d1\u63a7\u7248\u672c-[TanCloud\u63a2\u4e91](https://console.tancloud.cn)\u3002   \\n> \u5e0c\u671b\u5927\u5bb6\u591a\u591a\u652f\u6301\u70b9\u8d5e\uff0c\u975e\u5e38\u611f\u8c22\u3002\\n\\n## \ud83c\udfa1 <font color=\\"green\\">\u4ecb\u7ecd</font>\\n\\n> [HertzBeat\u8d6b\u5179\u8df3\u52a8](https://github.com/dromara/sureness) \u662f\u7531[TanCloud](https://tancloud.cn)\u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002  \\n> \u5f53\u7136\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684[SAAS\u4e91\u76d1\u63a7\u7248\u672c](https://console.tancloud.cn)\uff0c\u4e2d\u5c0f\u56e2\u961f\u548c\u4e2a\u4eba\u65e0\u9700\u518d\u4e3a\u4e86\u76d1\u63a7\u81ea\u5df1\u7684\u7f51\u7ad9\u8d44\u6e90\uff0c\u800c\u53bb\u90e8\u7f72\u4e00\u5957\u7e41\u7410\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c[\u767b\u9646\u5373\u53ef\u514d\u8d39\u5f00\u59cb](https://console.tancloud.cn)\u76d1\u63a7\u4e4b\u65c5\u3002  \\n> HertzBeat \u652f\u6301\u81ea\u5b9a\u4e49\u76d1\u63a7\uff0c\u53ea\u7528\u901a\u8fc7\u914d\u7f6eYML\u6587\u4ef6\u6211\u4eec\u5c31\u53ef\u4ee5\u81ea\u5b9a\u4e49\u9700\u8981\u7684\u76d1\u63a7\u7c7b\u578b\u548c\u6307\u6807\uff0c\u6765\u6ee1\u8db3\u5e38\u89c1\u7684\u4e2a\u6027\u5316\u9700\u6c42\u3002\\n> HertzBeat \u6a21\u5757\u5316\uff0c`manager, collector, scheduler, warehouse, alerter` \u5404\u4e2a\u6a21\u5757\u89e3\u8026\u5408\uff0c\u65b9\u4fbf\u7406\u89e3\u4e0e\u5b9a\u5236\u5f00\u53d1\u3002    \\n> HertzBeat \u652f\u6301\u66f4\u81ea\u7531\u5316\u7684\u544a\u8b66\u914d\u7f6e(\u8ba1\u7b97\u8868\u8fbe\u5f0f)\uff0c\u652f\u6301\u544a\u8b66\u901a\u77e5\uff0c\u544a\u8b66\u6a21\u7248    \\n> \u6b22\u8fce\u767b\u9646 HertzBeat \u7684 [\u4e91\u73af\u5883TanCloud](https://console.tancloud.cn) \u8bd5\u7528\u53d1\u73b0\u66f4\u591a\u3002   \\n> \u6211\u4eec\u6b63\u5728\u5feb\u901f\u8fed\u4ee3\u4e2d\uff0c\u6b22\u8fce\u53c2\u4e0e\u52a0\u5165\u5171\u5efa\u9879\u76ee\u5f00\u6e90\u751f\u6001\u3002\\n\\n> `HertzBeat`\u7684\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002\\n\\n\\n## \ud83e\udd50 \u6a21\u5757\\n\\n- **[manager](https://github.com/dromara/hertzbeat/tree/master/manager)** \u63d0\u4f9b\u76d1\u63a7\u7ba1\u7406,\u7cfb\u7edf\u7ba1\u7406\u57fa\u7840\u670d\u52a1\\n> \u63d0\u4f9b\u5bf9\u76d1\u63a7\u7684\u7ba1\u7406\uff0c\u76d1\u63a7\u5e94\u7528\u914d\u7f6e\u7684\u7ba1\u7406\uff0c\u7cfb\u7edf\u7528\u6237\u79df\u6237\u540e\u53f0\u7ba1\u7406\u7b49\u3002\\n- **[collector](https://github.com/dromara/hertzbeat/tree/master/collector)** \u63d0\u4f9b\u76d1\u63a7\u6570\u636e\u91c7\u96c6\u670d\u52a1\\n> \u4f7f\u7528\u901a\u7528\u534f\u8bae\u8fdc\u7a0b\u91c7\u96c6\u83b7\u53d6\u5bf9\u7aef\u6307\u6807\u6570\u636e\u3002\\n- **[scheduler](https://github.com/dromara/hertzbeat/tree/master/scheduler)** \u63d0\u4f9b\u76d1\u63a7\u4efb\u52a1\u8c03\u5ea6\u670d\u52a1\\n> \u91c7\u96c6\u4efb\u52a1\u7ba1\u7406\uff0c\u4e00\u6b21\u6027\u4efb\u52a1\u548c\u5468\u671f\u6027\u4efb\u52a1\u7684\u8c03\u5ea6\u5206\u53d1\u3002\\n- **[warehouse](https://github.com/dromara/hertzbeat/tree/master/warehouse)** \u63d0\u4f9b\u76d1\u63a7\u6570\u636e\u4ed3\u50a8\u670d\u52a1\\n> \u91c7\u96c6\u6307\u6807\u7ed3\u679c\u6570\u636e\u7ba1\u7406\uff0c\u6570\u636e\u843d\u76d8\uff0c\u67e5\u8be2\uff0c\u8ba1\u7b97\u7edf\u8ba1\u3002\\n- **[alerter](https://github.com/dromara/hertzbeat/tree/master/alerter)** \u63d0\u4f9b\u544a\u8b66\u670d\u52a1\\n> \u544a\u8b66\u8ba1\u7b97\u89e6\u53d1\uff0c\u76d1\u63a7\u72b6\u6001\u8054\u52a8\uff0c\u544a\u8b66\u914d\u7f6e\uff0c\u544a\u8b66\u901a\u77e5\u3002\\n- **[web-app](https://github.com/dromara/hertzbeat/tree/master/web-app)** \u63d0\u4f9b\u53ef\u89c6\u5316\u63a7\u5236\u53f0\u9875\u9762\\n> \u76d1\u63a7\u544a\u8b66\u7cfb\u7edf\u53ef\u89c6\u5316\u63a7\u5236\u53f0\u524d\u7aef(angular+ts+zorro)\\n\\n![hertzBeat](https://tancloud.gd2.qingstor.com/img/docs/hertzbeat-stru.svg)"}]}')}}]);