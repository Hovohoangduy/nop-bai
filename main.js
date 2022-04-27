$(document).ready(function () {
  var i = 1;
  $("#myBtn").click(function(){
    $("#myModal").modal()
});

  function KiemtraMa() {
    var re = /^[0-9]{10}/;
    if ($("#txtMa").val() == "") {
      $("#tbMa").html("*bắt buộc nhập");
      return false;
    }
    if (!re.test($("#txtMa").val())) {
      $("#tbMa").html("* Mã sinh viên phải là chữ số, 10 chữ số");
      return false;
    }
    $("#tbMa").html("*");
    return true;
  }
  $("#txtMa").blur(KiemtraMa);

  function Kiemtraten() {
    var i = 1;
    let mauKT = /^[a-zA-Z\-]+$/;
    if ($('#txtTen').val() == "") {
        $('#tbTen').html('Không để trống');
        return false;
    }
    if (!mauKT.test($('#txtTen').val())) {
        $('#tbTen').html('Không sử dụng số trong tên');
        return true;
    }
    $('#tbTen').html('');
    return true;
  }
  $('#txtTen').blur(Kiemtraten);
  function Kiemtrangay() {
    if ($("#txtNgay").val() == "") {
      $("#tbNgay").html("*bắt buộc nhập");
      return false;
    }
    var day = new Date($("#txtNgay").val());
    var today = new Date();
    today.setDate(today.getDate());
    if (day < today) {
      $("#tbNgay").html("* Ngày tham gia phải sau ngày hiện tại");
      return false;
    } else {
      $("#tbNgay").html("*");
      return true;
    }
  }
    $("#txtNgay").blur(Kiemtrangay);
    function checkEmail() {
      let mauKT =   /^([a-zA-Z0-9_\.\-])+\@((iuh)+\.)+((edu)+\.)+(vn)+$/;
      if ($('#txtEmail').val() == "") {
          $('#tbMail').html('Không để trống');
          return false;
      }
      if (!mauKT.test($('#txtEmail').val())) {
        $('#tbMail').html('Nhập email theo đinh dạng xxxxxx@iuh.edu.vn');
        return true;
    }
      $('#tbMail').html('');
      return true;
    }
    $('#txtEmail').blur(checkEmail);

    function checkSDT() {
      var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
      if ($('#txtSDT').val() == "") {
          $('#tbSDT').html('Không để trống');
          return false;
      }
      if (!mauKT.test($('#txtSDT').val())) {
          $('#tbSDT').html('Theo dạng 0xxx-xxx-xxx trong đó x là số');
          return truw;
      }
      $('#tbSDT').html('');
      return true;
    }
    $('#txtSDT').blur(checkSDT);

    $("#btnSave").click(function () {
      if (!KiemtraMa() || !Kiemtraten() || !Kiemtrangay() || !checkEmail() || checkSDT()) {
        $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin")
        return false;
      }
      var msv = $("#txtMa").val();
      var tensv = $("#txtTen").val();
      var ngay = $("#txtNgay").val();
      var email = $("#txtNgay").val();
      var sdt = $("#txtSDT").val();
      var them = "<tr><td>" + (i++) + "</td><td>" + msv + "</td><td>" + tensv + "</td><td>" + ngay + "</td><td>" + email + "</td><td>" + sdt + "</td><td>"
      $("table tbody").append(them);
      $("#myModal").modal("hide");
      return true;
    })
});