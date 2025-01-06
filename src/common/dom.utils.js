export const domUtils = {
  html,
};

/**
 *
 * @param {string} htmlString
 * @returns {HTMLElement}
 */
export function html(htmlString, ...childs) {
  // Tạo một container DOM tạm thời
  const template = document.createElement("template");
  template.innerHTML = htmlString.trim(); // Xóa khoảng trắng thừa
  // Trả về phần tử DOM đầu tiên từ nội dung HTML
  const rs = template.content.firstChild;
  childs.forEach((c) => rs.appendChild(c));
  return rs;
}
