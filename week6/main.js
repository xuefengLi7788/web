// 翻译词典
alert("✅ main.js 已成功运行");
const i18n = {
  en: {
    surname: "Surname/Family name:",
    given: "Given name:",
    issuing: "Issuing Post Name:",
    entries: "Entries:",
    reel: "REEL",
    allProjects: "ALL PROJECT",
    focus: "Focus:",
    focus_graphic: "GRAPHIC DESIGN",
    focus_motion: "MOTION DESIGN",
    focus_uiux: "UI/UX DESIGN",
    newProjects: "NEW projects!",
    project_walkinla: "WalkinLa",
    tag_uiux: "{uiux}",
    project_futureFlowers: "FutureofFlowers",
    project_intimateSpace: "IntimateSpace",
    project_lastDecision: "TheLastDecision",
    tag_service: "{Service}",
    feedback_label: "Customs Feedback:",
    feedback_placeholder: "Let me know your favorite project...",
    send: "→",
    footer: "Copyright © Xuefeng Li",
    visual_id: "VISUALDESIGNER<<XUEFENG<<LI<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
  },
  zh: {
    surname: "姓：",
    given: "名：",
    issuing: "签发地：",
    entries: "入境记录：",
    reel: "作品集视频",
    allProjects: "全部项目",
    focus: "研究方向：",
    focus_graphic: "平面设计",
    focus_motion: "动态图形设计",
    focus_uiux: "交互 / 界面设计",
    newProjects: "最新项目！",
    project_walkinla: "WalkinLa",
    tag_uiux: "{界面/交互}",
    project_futureFlowers: "FutureofFlowers",
    project_intimateSpace: "IntimateSpace",
    project_lastDecision: "最后的决定",
    tag_service: "{服务设计}",
    feedback_label: "访客留言：",
    feedback_placeholder: "你最喜欢哪个项目？告诉我！",
    send: "→",
    footer: "版权所有 © 李雪峰",
    visual_id: "VISUALDESIGNER<<XUEFENG<<LI<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
  }
};

// 切换函数
function switchLang(lang) {
  $("[data-i18n]").each(function () {
    const key = $(this).data("i18n");
    
    if ($(this).is("input, textarea")) {
      $(this).attr("placeholder", i18n[lang][key]);
    } else {
      $(this).text(i18n[lang][key]);
    }
  });
}

// dropdown 切换触发
$(".dropdown").on("change", function () {
  if ($(this).val() === "bj") {
    switchLang("zh");
    $("html").attr("lang", "zh-CN");
  } else {
    switchLang("en");
    $("html").attr("lang", "en");
  }
});

// 页面加载时先设置为英文
switchLang("en");

console.log("✅ main.js 已成功加载");
