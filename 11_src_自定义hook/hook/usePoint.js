import { reactive, onMounted, onBeforeUnmount } from "vue";

export default function () {
  let point = reactive({
    x: 0,
    y: 0,
  });
  function clickPoint(e) {
    point.x = e.pageX;
    point.y = e.pageY;
    console.log(point.x, point.y);
  }
  onMounted(() => {
    window.addEventListener("click", clickPoint);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", clickPoint);
  });

  return point;
}
