function wlCommonInit(){
	callAdapter_kh();
	callAdapter_hd();
	callAdapter_cthd();
	callAdapter_sp();
	callAdapter_lsp();
	addSubmit();
	addSubmitsp();
	addSubmitlsp();
	addSubmithd();
	addSubmitcthd();
	
	
}



var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 200);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("myDiv1").style.display = "block";
  document.getElementById("myDiv2").style.display = "block";
  document.getElementById("myDiv3").style.display = "block";
  document.getElementById("myDiv4").style.display = "block";
  document.getElementById("displayFeeds").style.display = "none";
  document.getElementById("displayFeeds1").style.display = "none";
  document.getElementById("displayFeeds2").style.display = "none";
  document.getElementById("displayFeeds3").style.display = "none";
  document.getElementById("displayFeeds4").style.display = "none";
}

function displayFeeds(items){
	var li="";
	$("#khachHang").empty();
	for(var i=0; i<items.length;i++){
		
		li+="<span style="+'color:#6699FF'+">Mã khách hàng : </span>"+items[i].Ma_KH+'<br/>';
		li+="<span style="+'color:#6699FF'+">Tên khách hàng : </span>"+items[i].Ten_KH+'<br/>';
		li+="<span style="+'color:#6699FF'+">Ngày sinh : </span>"+items[i].Ngay_Sinh+'<br/>';
		li+="<span style="+'color:#6699FF'+">Địa chỉ : </span>"+items[i].Dia_Chi+'<br/>';
		li+="<span style="+'color:#6699FF'+">CMND: </span>"+items[i].CMND+'<br/>';
		li+="<span style="+'color:#6699FF'+">Số điện thoại : </span>"+items[i].SDT+'<br/>';
		var id = items[i].Ma_KH;
		li+='</a></li><button id="btnDelete" onclick="removeKhachHang('+"'"+id+"'"+')">remove</button><hr>';
//		removeStudent('+items[i].Ma_KH+')
	}
	$("#khachHang").append(li);
}
function displayFeeds1(items){
	var li="";
	$("#hoaDon").empty();
	for(var i=0; i<items.length;i++){
		
		li+="<span style="+'color:#6699FF'+">Mã hóa đơn : </span>"+items[i].Ma_HD+'<br/>';
		li+="<span style="+'color:#6699FF'+">Mã khách hàng : </span>"+items[i].Ma_KH+'<br/>';
		li+="<span style="+'color:#6699FF'+">Giá trị hóa đơn : </span>"+items[i].GiaTri_HD+'<br/>';
		li+="<span style="+'color:#6699FF'+">Ngày hóa đơn : </span>"+items[i].Ngay_Hoa_Don+'<br/>';
		var id = items[i].Ma_HD;
		li+='</a></li><button id="btnDelete_hd" onclick="removeHoaDon('+"'"+id+"'"+')">remove</button><hr>';
//		removeStudent('+items[i].Ma_KH+')
	}
	$("#hoaDon").append(li);
}
function displayFeeds2(items){
	var li="";
	$("#chiTietHoaDon").empty();
	for(var i=0; i<items.length;i++){
		
		li+="<span style="+'color:#6699FF'+">Mã hóa đơn : </span>"+items[i].ID_CTHD+'<br/>';
		li+="<span style="+'color:#6699FF'+">Mã hóa đơn : </span>"+items[i].Ma_HD+'<br/>';
		li+="<span style="+'color:#6699FF'+">Mã sản phẩm : </span>"+items[i].Ma_SP+'<br/>';
		li+="<span style="+'color:#6699FF'+">Số lượng : </span>"+items[i].So_Luong+'<br/>';
		li+="<span style="+'color:#6699FF'+">Đơn giá : </span>"+items[i].Don_Gia+'<br/>';
		li+="<span style="+'color:#6699FF'+">Thành tiền : </span>"+items[i].Thanh_Tien+'<br/>';
		var id = items[i].ID_CTHD;
		li+='</a></li><button id="btnDelete_cthd" onclick="removeChiTietHoaDon('+"'"+id+"'"+')">remove</button><hr>';
//		removeStudent('+items[i].Ma_KH+')
	}
	$("#chiTietHoaDon").append(li);
}
function displayFeeds3(items){
	var li="";
	$("#sanPham").empty();
	for(var i=0; i<items.length;i++){
		
		li+="<span style="+'color:#6699FF'+">Mã sản phẩm : </span>"+items[i].Ma_SP+'<br/>';
		li+="<span style="+'color:#6699FF'+">Mã loại sản phẩm : </span>"+items[i].Ma_Loai_SP+'<br/>';
		li+="<span style="+'color:#6699FF'+">Tên sản phẩm : </span>"+items[i].Ten_SP+'<br/>';
		li+="<span style="+'color:#6699FF'+">Giá sản phẩm : </span>"+items[i].Gia_SP+'<br/>';
		li+="<span style="+'color:#6699FF'+">Đơn vị tính : </span>"+items[i].Don_Vi_Tinh+'<br/>';
		var id = items[i].Ma_SP;
		li+='</a></li><button id="btnDelete_sp" onclick="removeSanPham('+"'"+id+"'"+')">remove</button><hr>';
//		removeStudent('+items[i].Ma_KH+')
	}
	$("#sanPham").append(li);
}
function displayFeeds4(items){
	var li="";
	$("#loaiSanPham").empty();
	for(var i=0; i<items.length;i++){
		
		li+="<span style="+'color:#6699FF'+">Mã loại sản phẩm : </span>"+items[i].Ma_Loai_SP+'<br/>';
		li+="<span style="+'color:#6699FF'+">Tên loại sản phẩm : </span>"+items[i].Ten_Loai_SP+'<br/>';
		li+="<span style="+'color:#6699FF'+">Thời gian bảo hành : </span>"+items[i].TGBH+'<br/>';
		var id = items[i].Ma_Loai_SP;
		li+='</a></li><button id="btnDelete_lsp" onclick="removeLoaiSanPham('+"'"+id+"'"+')">remove</button><hr>';
//		removeStudent('+items[i].Ma_KH+')
	}
	$("#loaiSanPham").append(li);
}
// edit khach hang
function addKhachHang() {
    var invocationData = {
        adapter: 'quanlybanhang',
        procedure: 'addQuanlybanhang_kh',
        parameters: [$('#Ma_KH').val(), $('#Ten_KH').val(),$('#Ngay_Sinh').val(),$('#Dia_Chi').val(),$('#CMND').val(),$('#SDT').val()]
    };
    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccesskh, onFailure: insertFailurekh});
}
function updateKhachHang() {
    var invocationData = {
        adapter: 'quanlybanhang',
        procedure: 'updateQuanlybanhang_kh',
        parameters: [ $('#Ten_KH').val(),$('#Ngay_Sinh').val(),$('#Dia_Chi').val(),$('#CMND').val(),$('#SDT').val(),$('#Ma_KH').val()]
    };
    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccesskh, onFailure: insertFailurekh});
}
function addSubmit(){
	$('#add').click(function(){
		addKhachHang();
	});
}
function updateSubmit(){
	$('#btnDelete').click(function(){
		updateKhachHang();
	});
}

function insertSuccesskh() {
//	Materialize.toast('success !', 4000);
	alert("Thành Công !");
	callAdapter_kh();
}

function insertFailurekh() {
//	Materialize.toast('failure !', 4000);
	alert("Thất bại !");
	callAdapter_kh();
}

function removeKhachHang(Ma_KH){
	var invocationData = {
	    adapter: 'quanlybanhang',
	    procedure: 'deleteQuanlybanhang_kh',
	    parameters: [Ma_KH]
	    };
	    function insertSuccess() {
	    	alert("thành công");
	        Materialize.toast('success !', 4000);
	        callAdapter_kh();
	    }
	    function insertFailure() {
	        Materialize.toast('failure !', 4000);
	    }
	    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccess, onFailure: insertFailure});
}
// edit san pham

function addSanPham() {
    var invocationData = {
        adapter: 'quanlybanhang',
        procedure: 'addQuanlybanhang_sp', 
        parameters: [$('#Ma_SP').val(),$('#Ma_Loai_SP').val(), $('#Ten_SP').val(),$('#Gia_SP').val(),$('#Don_Vi_Tinh').val()]
    };
    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccesssp, onFailure: insertFailuresp});
}
function updateSanPham() {
    var invocationData = {
        adapter: 'quanlybanhang',
        procedure: 'updateQuanlybanhang_sp',
        parameters: [ $('#Ma_Loai_SP').val(),$('#Ten_SP').val(),$('#Gia_SP').val(),$('#Don_Vi_Tinh').val(),$('#Ma_SP').val()]
    };
    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccesssp, onFailure: insertFailuresp});
}
function addSubmitsp(){
	$('#add_sp').click(function(){
		addSanPham();
	});
}
function updateSubmit(){
	$('#btnDelete_sp').click(function(){
		updateSanPham();
	});
}

function insertSuccesssp() {
//	Materialize.toast('success !', 4000);
	alert("Thành Công !");
	
	callAdapter_sp();
}

function insertFailuresp() {
//	Materialize.toast('failure !', 4000);
	alert("Thất bại !");
	callAdapter_sp();
}

function removeSanPham(Ma_SP){
	var invocationData = {
	    adapter: 'quanlybanhang',
	    procedure: 'deleteQuanlybanhang_sp',
	    parameters: [Ma_SP]
	    };
	    function insertSuccess() {
	    	alert("thành công");
	        Materialize.toast('success !', 4000);
	        callAdapter_sp();
	    }
	    function insertFailure() {
	        Materialize.toast('failure !', 4000);
	    }
	    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccess, onFailure: insertFailure});
}

// edit loai san pham

function addLoaiSanPham() {
    var invocationData = {
        adapter: 'quanlybanhang',
        procedure: 'addQuanlybanhang_lsp',
        parameters: [$('#Ma_Loai_SP1').val(), $('#Ten_Loai_SP').val(),$('#TGBH').val()]
    };
    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccesslsp, onFailure: insertFailurelsp});
}
function updateLoaiSanPham() {
    var invocationData = {
        adapter: 'quanlybanhang',
        procedure: 'updateQuanlybanhang_lsp',
        parameters: [ $('#Ten_Loai_SP').val(),$('#TGBH').val(),$('#Ma_Loai_SP').val()]
    };
    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccesslsp, onFailure: insertFailurelsp});
}
function addSubmitlsp(){
	$('#add_lsp').click(function(){
		addLoaiSanPham();
	});
}
function updateSubmit(){
	$('#btnDelete_lsp').click(function(){
		updateLoaiSanPham();
	});
}

function insertSuccesslsp() {
//	Materialize.toast('success !', 4000);
	alert("Thành Công !");
	callAdapter_lsp();
}

function insertFailurelsp() {
//	Materialize.toast('failure !', 4000);
	alert("Thất bại !");
	callAdapter_lsp();
}

function removeLoaiSanPham(Ma_Loai_SP){
	var invocationData = {
	    adapter: 'quanlybanhang',
	    procedure: 'deleteQuanlybanhang_lsp',
	    parameters: [Ma_Loai_SP]
	    };
	    function insertSuccess() {
	    	alert("thành công");
	        Materialize.toast('success !', 4000);
	        callAdapter_lsp();
	    }
	    function insertFailure() {
	        Materialize.toast('failure !', 4000);
	    }
	    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccess, onFailure: insertFailure});
}


// edit hoa don

function addHoaDon() {
    var invocationData = {
        adapter: 'quanlybanhang',
        procedure: 'addQuanlybanhang_hd', 
        parameters: [$('#Ma_HD1').val(), $('#Ma_KH1').val(),$('#GiaTri_HD').val(),$('#Ngay_Hoa_Don').val()]
    };
    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccesshd, onFailure: insertFailurehd});
}
function updateHoaDon() {
    var invocationData = {
        adapter: 'quanlybanhang',
        procedure: 'updateQuanlybanhang_hd',
        parameters: [ $('#Ma_KH1').val(),$('#GiaTri_HD').val(),$('#Ngay_Hoa_Don').val(),$('#Ma_HD1').val()]
    };
    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccesshd, onFailure: insertFailurehd});
}
function addSubmithd(){
	$('#add_hd').click(function(){
		addHoaDon();
	});
}
function updateSubmit(){
	$('#btnDelete_hd').click(function(){
		updateHoaDon();
	});
}

function insertSuccesshd() {
//	Materialize.toast('success !', 4000);
	alert("Thành Công !");
	callAdapter_hd();
}

function insertFailurehd() {
//	Materialize.toast('failure !', 4000);
	alert("Thất bại !");
}

function removeHoaDon(Ma_HD){
	var invocationData = {
	    adapter: 'quanlybanhang',
	    procedure: 'deleteQuanlybanhang_hd',
	    parameters: [Ma_HD]
	    };
	    function insertSuccess1() {
	    	alert("thành công");
	        Materialize.toast('success !', 4000);
	        callAdapter_hd();
	    }
	    function insertFailure1() {
	        Materialize.toast('failure !', 4000);
	    }
	    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccess1, onFailure: insertFailure1});
}

// edit chi tiet hoa don

function addChiTietHoaDon() {
    var invocationData = {
        adapter: 'quanlybanhang',
        procedure: 'addQuanlybanhang_cthd', 
        parameters: [$('#ID_CTHD').val(),$('#Ma_HD2').val(), $('#Ma_SP2').val(),$('#So_Luong').val(),$('#Don_Gia').val(),$('#Thanh_tien').val()]
    };
    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccess, onFailure: insertFailure});
}
function updateChiTietHoaDon() {
    var invocationData = {
        adapter: 'quanlybanhang',
        procedure: 'updateQuanlybanhang_cthd',
        parameters: [ $('#Ma_HD2').val(),$('#Ma_SP2').val(),$('#So_Luong').val(),$('#Don_Gia').val(),$('#Thanh_tien').val(),$('#ID_CTHD').val()]
    };
    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccess, onFailure: insertFailure});
}
function addSubmitcthd(){
	$('#add_cthd').click(function(){
		addChiTietHoaDon();
	});
}
function updateSubmit(){
	$('#btnDelete_cthd').click(function(){
		updateChiTietHoaDon();
	});
}

function insertSuccess() {
//	Materialize.toast('success !', 4000);
	alert("Thành Công !");
	callAdapter_cthd();
}

function insertFailure() {
//	Materialize.toast('failure !', 4000);
	alert("Thất bại !");
	callAdapter_cthd();
}

function removeChiTietHoaDon(ID_CTHD){
	var invocationData = {
	    adapter: 'quanlybanhang',
	    procedure: 'deleteQuanlybanhang_cthd',
	    parameters: [ID_CTHD]
	    };
	    function insertSuccess() {
	    	alert("thành công");
	        Materialize.toast('success !', 4000);
	        callAdapter_cthd();
	    }
	    function insertFailure() {
	        Materialize.toast('failure !', 4000);
	    }
	    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccess, onFailure: insertFailure});
}






//kh
function callAdapter_kh(){
	var invocationData = {
	     adapter : 'quanlybanhang',//Name adapter
	     procedure : 'getQuanlybanhangs_kh',//Name procedure
	     parameters : []
	    };
	    
	    WL.Client.invokeProcedure(invocationData, {
	        onSuccess : loadSQLQueerySuccess,
	        onFailure : loadSQLQueeryFailure
	    });
	function loadSQLQueerySuccess(result){
		displayFeeds(result.invocationResult.resultSet);
	}
	function loadSQLQueeryFailure(){
//		alert("Không tìm thấy CSDL");
		Materialize.toast('Không tìm thấy CSDL!', 4000);
	}
}
 
//hd

function callAdapter_hd(){
	var invocationData = {
	     adapter : 'quanlybanhang',//Name adapter
	     procedure : 'getQuanlybanhangs_hd',//Name procedure
	     parameters : []
	    };
	    
	    WL.Client.invokeProcedure(invocationData, {
	        onSuccess : loadSQLQueerySuccess,
	        onFailure : loadSQLQueeryFailure
	    });
	function loadSQLQueerySuccess(result){
		displayFeeds1(result.invocationResult.resultSet);
	}
	function loadSQLQueeryFailure(){
//		alert("Không tìm thấy CSDL");
		Materialize.toast('Không tìm thấy CSDL!', 4000);
	}
}
//cthd
function callAdapter_cthd(){
	var invocationData = {
	     adapter : 'quanlybanhang',//Name adapter
	     procedure : 'getQuanlybanhangs_cthd',//Name procedure
	     parameters : []
	    };
	    
	    WL.Client.invokeProcedure(invocationData, {
	        onSuccess : loadSQLQueerySuccess,
	        onFailure : loadSQLQueeryFailure
	    });
	function loadSQLQueerySuccess(result){
		displayFeeds2(result.invocationResult.resultSet);
	}
	function loadSQLQueeryFailure(){
//		alert("Không tìm thấy CSDL");
		Materialize.toast('Không tìm thấy CSDL!', 4000);
	}
}
//sp
function callAdapter_sp(){
	var invocationData = {
	     adapter : 'quanlybanhang',//Name adapter
	     procedure : 'getQuanlybanhangs_sp',//Name procedure
	     parameters : []
	    };
	    
	    WL.Client.invokeProcedure(invocationData, {
	        onSuccess : loadSQLQueerySuccess,
	        onFailure : loadSQLQueeryFailure
	    });
	function loadSQLQueerySuccess(result){
		displayFeeds3(result.invocationResult.resultSet);
	}
	function loadSQLQueeryFailure(){
//		alert("Không tìm thấy CSDL");
		Materialize.toast('Không tìm thấy CSDL!', 4000);
	}
}
//lsp
function callAdapter_lsp(){
	var invocationData = {
	     adapter : 'quanlybanhang',//Name adapter
	     procedure : 'getQuanlybanhangs_lsp',//Name procedure
	     parameters : []
	    };
	    
	    WL.Client.invokeProcedure(invocationData, {
	        onSuccess : loadSQLQueerySuccess,
	        onFailure : loadSQLQueeryFailure
	    });
	function loadSQLQueerySuccess(result){
		displayFeeds4(result.invocationResult.resultSet);
	}
	function loadSQLQueeryFailure(){
//		alert("Không tìm thấy CSDL");
		Materialize.toast('Không tìm thấy CSDL!', 4000);
	}
}
