import "bootstrap/dist/css/bootstrap.min.css";
import "../css/json-sorter.css";
import $ from "jquery";
import "bootstrap";
import { methods } from "./methods";

$(() => {
  // 実行ボタン
  $(".do-sort").click(() => {
    const inputObj = JSON.parse($("[name=input-json]").val());
    const sorted = methods.objectSort(inputObj);
    $("[name=output-json]").val(JSON.stringify(sorted, null, 2));
  });

  // 削除ボタン
  $(".erase").click(() => {
    $("[name=input-json]").val("");
    $("[name=output-json]").val("");
  });
});
