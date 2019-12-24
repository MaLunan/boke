//wangeditor富文本
import wangeditor from '../node_modules/wangeditor/release/wangEditor.min.js'
const editor = new wangeditor('#div1','#div2')
editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
// editor.customConfig.uploadImgServer = '/upload'//上传到服务器
 // 自定义配置颜色（字体颜色、背景色）
 editor.customConfig.colors = [
    '#000000',
    '#eeece0',
    '#1c487f',
    '#4d80bf',
    '#c24f4a',
    '#8baa4a',
    '#7b5ba1',
    '#46acc8',
    '#f9963b',
    '#ffffff'
]
editor.customConfig.zIndex = 100//设置z-index
//配置字体样式
// editor.customConfig.fontNames = [
//     '宋体',
//     '微软雅黑',
//     'Arial',
//     'Tahoma',
//     'Verdana'
// ]
//配置表情
// editor.customConfig.emotions = [
//     {
//         // tab 的标题
//         title: '默认',
//         // type -> 'emoji' / 'image'
//         type: 'image',
//         // content -> 数组
//         content: [
//             {
//                 alt: '[坏笑]',
//                 src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
//             },
//             {
//                 alt: '[舔屏]',
//                 src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
//             }
//         ]
//     },
//     {
//         // tab 的标题
//         title: 'emoji',
//         // type -> 'emoji' / 'image'
//         type: 'emoji',
//         // content -> 数组
//         content: ['😀', '😃', '😄', '😁', '😆']
//     }
// ]
export default editor