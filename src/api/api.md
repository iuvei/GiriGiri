// 弹幕地址, 视频地址, 封面图, 视频长度
https://api.bilibili.com/playurl?&aid=29053024&page=2&platform=html5&quality=1&vtype=mp4

// 图片, 分集, 描述: 查询pic, pages, desc等属性
https://api.bilibili.com/x/web-interface/view?aid=29053024

// 标签: 查询tags
https://api.bilibili.com/x/tag/archive/tags?aid=29053024

// 推荐
https://comment.bilibili.com/recommendnew,29053024

// 评论: 查询replies
https://api.bilibili.com/x/v2/reply?type=1&sort=2&oid=29053024&pn=1&nohot=1

// 弹幕(cid)
https://comment.bilibili.com/50403051.xml

"p": "8.46000,1,25,16777215,1535114299,0,ccef88ca,4179689037365248"
第一个参数是弹幕出现的时间 以秒数为单位。
第二个参数是弹幕的模式1..3 滚动弹幕 4底端弹幕 5顶端弹幕 6.逆向弹幕 7精准定位 8高级弹幕
第三个参数是字号， 12非常小,16特小,18小,25中,36大,45很大,64特别大
第四个参数是字体的颜色 以HTML颜色的十位数为准
第五个参数是Unix格式的时间戳。基准时间为 1970-1-1 08:00:00
第六个参数是弹幕池 0普通池 1字幕池 2特殊池 【目前特殊池为高级弹幕专用】
第七个参数是发送者的ID，用于“屏蔽此弹幕的发送者”功能
第八个参数是弹幕在弹幕数据库中rowID 用于“历史弹幕”功能。


// 搜索推荐
https://s.search.bilibili.com/main/suggest?func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&bangumi_acc_num=3&special_acc_num=0&upuser_acc_num=0&tag_num=10&term=%E6%8B%92%E7%BB%9D


搜索Host: https://m.bilibili.com/search/searchengine

// 搜索综合
  默认排序
  {"keyword":"","page":1,"pagesize":20,"platform":"h5","search_type":"all","main_ver":"v3","order":"totalrank","bangumi_num":3,"movie_num":3}
  播放多
  {"keyword":"","page":1,"pagesize":20,"platform":"h5","search_type":"all","main_ver":"v3","order":"click","bangumi_num":3,"movie_num":3}
  新发布
  {"keyword":"","page":1,"pagesize":20,"platform":"h5","search_type":"all","main_ver":"v3","order":"pubdate","bangumi_num":3,"movie_num":3}
  弹幕多
  {"keyword":"","page":1,"pagesize":20,"platform":"h5","search_type":"all","main_ver":"v3","order":"dm","bangumi_num":3,"movie_num":3}

// 搜索用户
{"keyword":"","page":1,"pagesize":20,"platform":"h5","search_type":"upuser","main_ver":"v3","order":"totalrank"}

// 搜索番剧
{"keyword":"","page":1,"pagesize":20,"platform":"h5","search_type":"bangumi","main_ver":"v3","order":"totalrank"}

// 搜索影视
{"keyword":"","page":1,"pagesize":20,"platform":"h5","search_type":"pgc","main_ver":"v3","order":"totalrank"}
