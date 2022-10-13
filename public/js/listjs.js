

// dinh nghia cac loai block

var header_head = {
  style: {
    color,
    width,
    height,
  },
  support: {
    type: text,
    content: {
      text_content,
    },
    style: {
      color,
      width,
      height,
    },
  },
  menu: {
    type: text,
    content: {
      text_content,
    },
    style: {
      color,
      width,
      height,
    },
  },
};

$(document).ready(function () {
  const numberPhone = $(".support>li+span");
  const email = $(".support+li+span");
  const date = $(".support>li:last-child+span");

  const latestNew = $(".menu>li+a");
  const login = $(".menu+li+a");
  const register = $(".menu>li:nth-child(3)+a");
  const aboutUs = $(".menu>li:last-child+a");

  const stylesNumberPhone = window.getComputedStyle(numberPhone);
  numberPhone.css(color);
});



// var header_body = {
//   type: img,
//   link_img: href,
//   height: x,
//   width: y,
//   link_click: zzzz,
// };

// var header_footer = {
//   type: block,
//   color: css,
//   height: x,
//   width: y,
//   main_menu: {
//     type: text,
//     content: {
//       text_content: abcxyz,
//       css: [font - size, font - weight, font - italic, font - color],
//       link_click: zzzz,
//     },
//   },
// };

// var wp_content = {
//   slider_home_thumb: {
//     type: img,
//     link_img: href,
//     height: x,
//     width: y,
//     link_click: zzzz,
//   },
//   slider_home_content: {
//     type: text,
//     content: {
//       text_content: abcxyz,
//       css: [font - size, font - weight, font - italic, font - color],
//       link_click: zzzz,
//     },
//   },
// };

// var content = {
//   post_featured: [
//     (post_featured_thumb = {
//       type: img,
//       link_img: href,
//       height: x,
//       width: y,
//       link_click: zzzz,
//     }),
//     (post_featured_content = [
//       (post_featured_content_title = {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       }),
//       (post_featured_content_excerpt = {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       }),
//       (post_featured_content_readmore = {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//         link_click: zzz,
//       }),
//     ]),
//   ],
// };

// var recent = {
//   head_recent: {
//     type: text,
//     text_content: abcxyz,
//     css: [font - size, font - weight, font - italic, font - color],
//   },
//   body_recent: {
//     body_recent_title: {
//       type: text,
//       text_content: abcxyz,
//       css: [font - size, font - weight, font - italic, font - color],
//     },
//     body_recent_listitem: {
//       body_recent_item: {
//         body_recent_item_thumb: {
//           type: img,
//           link_img: href,
//           height: x,
//           width: y,
//           link_click: zzzz,
//         },
//         body_recent_item_content: [
//           (body_recent_item_content_title = {
//             type: text,
//             text_content: abcxyz,
//             css: [font - size, font - weight, font - italic, font - color],
//           }),
//           (body_recent_item_content_excerpt = {
//             type: text,
//             text_content: abcxyz,
//             css: [font - size, font - weight, font - italic, font - color],
//           }),
//         ],
//       },
//     },
//   },
// };

// var about_us = {
//   au_left: {
//     type: block,
//     css: [color, width, height],
//     ab_head_left: {
//       type: text,
//       text_content: abcxyz,
//       css: [font - size, font - weight, font - italic, font - color],
//     },
//     ab_left_item: {
//       ab_left_ava: {
//         type: img,
//         link_img: href,
//         height: x,
//         width: y,
//       },
//       ab_left_content: {
//         ab_left_content_excerpt: {
//           type: text,
//           text_content: abcxyz,
//           css: [font - size, font - weight, font - italic, font - color],
//         },
//         ab_left_content_name: {
//           type: text,
//           text_content: abcxyz,
//           css: [font - size, font - weight, font - italic, font - color],
//         },
//       },
//     },
//   },
//   au_right: {
//     type: block,
//     css: [color, width, height],
//     au_right_title: {
//       type: text,
//       text_content: abcxyz,
//       css: [font - size, font - weight, font - italic, font - color],
//     },
//     au_right_select: {
//       au_right_select_item: {
//         au_right_select_item_text: {
//           type: text,
//           text_content: abcxyz,
//           css: [font - size, font - weight, font - italic, font - color],
//         },
//       },
//     },
//   },
// };

// var widget = {
//   type: block,
//   css: [color, width, height],
//   widget_title: {
//     type: text,
//     text_content: abcxyz,
//     css: [font - size, font - weight, font - italic, font - color],
//   },
//   widget_info: {
//     type: text,
//     text_content: abcxyz,
//     css: [font - size, font - weight, font - italic, font - color],
//   },
//   widget_listItem: {
//     widget_item: {
//       widget_item_thumb: {
//         type: img,
//         link_img: href,
//         height: x,
//         width: y,
//       },
//       widget_item_date: {
//         type: date,
//         text_content: 18 / 10 / 2001,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//       widget_item_content: {
//         widget_item_content_title: {
//           type: text,
//           text_content: abcxyz,
//           css: [font - size, font - weight, font - italic, font - color],
//         },
//         widget_item_content_tag: {
//           type: text,
//           text_content: abcxyz,
//           css: [font - size, font - weight, font - italic, font - color],
//         },
//         widget_item_content_excerpt: {
//           type: text,
//           text_content: abcxyz,
//           css: [font - size, font - weight, font - italic, font - color],
//         },
//       },
//     },
//   },
// };

// var carousel = {
//   type: block,
//   css: [color, width, height],
//   carousel_listItem: {
//     carousel_item: {
//       type: img,
//       link_img: href,
//       height: x,
//       width: y,
//     },
//   },
// };

// var footer = {
//   type: block,
//   css: [color, width, height],
//   head_footer: {
//     first_head_footer: {
//       first_head_footer_title: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//       first_head_footer_excerpt: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//     },
//     society_icon: {
//       society_icon_item: {
//         type: icon,
//         link_img: href,
//         height: x,
//         width: y,
//       },
//     },
//     third_head_footer: {
//       third_head_footer_title: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//       third_head_footer_describe: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//     },
//     search: {
//       search_input: {
//         type: block,
//         css: [color, width, height],
//       },
//       search_button: {
//         type: block,
//         css: [color, width, height],
//       },
//     },
//   },
//   body_footer: {
//     type: block,
//     css: [color, width, height],
//     body_footer_first: {
//       body_footer_first_title: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//       body_footer_first_describe: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//     },
//     body_footer_recents_post: {
//       body_footer_recents_post_title: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//       body_footer_recents_post_item: {
//         body_footer_recents_post_thumb: {
//           type: img,
//           link_img: href,
//           height: x,
//           width: y,
//         },
//         body_footer_recents_post_text: {
//           type: text,
//           text_content: abcxyz,
//           css: [font - size, font - weight, font - italic, font - color],
//         },
//       },
//     },
//     body_footer_contacs: {
//       body_footer_contacs_title: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//       body_footer_contacs_excerpt: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//     },
//     body_footer_signNew: {
//       body_footer_signnew_title: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//       body_footer_signNew_inputName: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//       body_footer_signNew_inputEmail: {
//         type: text,
//         text_content: abcxyz,
//         css: [font - size, font - weight, font - italic, font - color],
//       },
//       body_footer_signNew_button: {
//         type: block,
//         css: [color, width, height],
//       },
//     },
//   },
// };



