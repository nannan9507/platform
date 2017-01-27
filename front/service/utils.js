export default {
  setListSelected: (list) => {
    if (list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        list[i].selected = false;
      }
      list[0].selected = true;
      return list;
    }
  }
}