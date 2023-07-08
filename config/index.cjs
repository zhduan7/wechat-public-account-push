/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc36a1812ca39ed9a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '66a7c19be8d4e6e0879882b8429b6191',

  PROVINCE: '浙江',
  CITY: '杭州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '燕子宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okPOq6AD1XGhFf6e0l4BiLJSdpno',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ib9q1xTgXvsLgXNpc3pkLg12NrruVU6n4QON6pqofR4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '燕子宝宝', year: '2000', date: '01-20',
        },
        {
          type: '生日', name: '航航宝宝', year: '1995', date: '02-14',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '01-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-02-26' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okPOq6EnH3_hVUuI1LDPTUZcYQRg',
    }
  ],

}

module.exports = USER_CONFIG

