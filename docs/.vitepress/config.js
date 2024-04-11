export default {
    // 站点级选项
    title: '念歪的道德经',
    base: '/',
    description: '一人一世界',
    themeConfig: {
        sidebarDepth: 3, //页面小导航深度
        // 主题级选项
        nav: [
            { text: 'HtmlCss', //这个不顶用,实际路径看文件路径
                //默认访问页面
                items: [{ text: 'html',link:'/Html/index.md'},
                    { text: 'css',link:'/Css/index.md'}]
            },
            { text: 'Javascript', link: '/Javascript/index' },
            { text: 'TypeScript', link: '/ts/index' },
            { text: 'Vue', link: '/vue/index' },
            { text: 'React', link: '/react/index' },
            { text: 'Python', link: '/Python/index' },
            { text: 'Node', link: '/Node/index' },
            { text: 'Java', link: '/Java/index' },
            { text: 'Go', link: '/Go/index' },
        ], 
        sidebar: {
           '/ts/': [
               {
                   items: [
                       { text: '数据类型', link: '/ts/数据类型' },
                       { text: '体操', link: '/ts/jump' },
                       { text: '对象', link: '/ts/object' },
                       { text: '数组', link: '/ts/array' },
                       { text: '继承', link: '/ts/inter' },
                       { text: '函数', link: '/ts/函数' },
                       { text: '字符串', link: '/ts/str' },
                       { text: '布尔', link: '/ts/boo' },
                   ]
               }
           ],
            '/vue/': [
                {
                    items: [
                        { text: 'vue2', link: '/vue/' },
                        { text: 'vue3', link: '/vue/one' }
                    ]
                }
            ],
            '/react/': [
                {
                    items: [
                        { text: 'react16', link: '/react/' },
                        { text: 'react18', link: '/react/one' }
                    ]
                }
            ],
            '/Python/': [
                {
                    items: [
                        { text: '类型', link: '/Python/' },
                        { text: '爬虫', link: '/Python/one' }
                    ]
                }
            ],
            '/Node/': [
                {
                    items: [
                        { text: '中间件', link: '/Node/' },
                        { text: '路由', link: '/Node/one' }
                    ]
                },
                {
                    items: [
                        { text: 'orm', link: '/Node/' },
                        { text: 'orm-redis', link: '/Node/one' }
                    ]
                }
            ],
            '/Java/': [
                {
                    items: [
                        { text: '一级', link: '/Java/' },
                        { text: 'one', link: '/Java/one' }
                    ]
                },
                {
                    items: [
                        { text: '一级', link: '/Java/' },
                        { text: 'one', link: '/Java/one' }
                    ]
                }
            ],
            '/Go/': [
                {
                    items: [
                        { text: '基础知识', link: '/Go/' },
                        { text: '框架', link: '/Go/one' }
                    ]
                }
            ],
            // 注意大小写,基于文件路径
            '/Html/': [
                {
                    items: [
                        { text: '基础', link: '/Html/one' },
                        { text: '优化', link: '/Html/two' }
                    ]
                }
            ],
            '/Css/': [
                {
                    items: [
                        { text: '选择器', link: '/Css/css' },
                        { text: '乌拉', link: '/Css/one' }
                    ]
                }
            ],
            '/Javascript/': [
                {
                    items: [
                        { text: '基础', link: '/Javascript/' },
                        { text: '进阶', link: '/Javascript/one' }
                    ]
                }
            ]
        }
    }
}