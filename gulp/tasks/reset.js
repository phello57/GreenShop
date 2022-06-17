// этот файл удаляет файлы из dist, которые были удалены в src
// типа он все в папке удаляет
import del from "del";
export const reset = () => {
  return del(app.path.clean);
}