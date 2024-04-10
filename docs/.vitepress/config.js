export default {
    // 站点级选项
    title: '念歪的道德经',
    base: '/',
    description: '一人一世界',

    themeConfig: {
        // 主题级选项
        nav: [
            { text: 'HtmlCss', link: '/HtmlCss/index' },
            { text: 'Javascript', link: '/Javascript/index' },
            { text: 'Vue', link: '/vue/index' },
            { text: 'React', link: '/react/index' },
            { text: 'Python', link: '/Python/index' },
            { text: 'Node', link: '/Node/index' },
            { text: 'Java', link: '/Java/index' },
            { text: 'Go', link: '/Go/index' },
        ], 
        sidebar: {
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
            '/Html/': [
                {
                    items: [
                        { text: 'html', link: '/HtmlCss/' },
                        { text: 'css', link: '/HtmlCss/one' }
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