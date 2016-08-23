/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/*******************************************************************************
 * Implementation code for procedure - 'procedure1'
 * 
 * 
 * @return - invocationResult
 */
 
var procedure1Statement = WL.Server.createSQLStatement("select *from khachhang");
function procedure1(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [param]
	});
}
var procedure1Statement = WL.Server.createSQLStatement("select *from sanpham");
function procedure1(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [param]
	});
}
var procedure1Statement = WL.Server.createSQLStatement("select *from loaisanpham");
function procedure1(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [param]
	});
}
//var procedure1Statement = WL.Server.createSQLStatement("select *from hoadon");
//function procedure1(param) {
//	return WL.Server.invokeSQLStatement({
//		preparedStatement : procedure1Statement,
//		parameters : [param]
//	});
//}
//var procedure1Statement = WL.Server.createSQLStatement("select *from chitiethoadon");
//function procedure1(param) {
//	return WL.Server.invokeSQLStatement({
//		preparedStatement : procedure1Statement,
//		parameters : [param]
//	});
//}

/*******************************************************************************
 * Implementation code for procedure - 'procedure2'
 * 
 * 
 * @return - invocationResult
 */
 
function procedure2(param) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}

/*******************************************************************************
 * Functions that correspond to JSONStore client operations
 * KHACHHANG
 */

var selectStatement = WL.Server.createSQLStatement("select *from khachhang");
function getQuanlybanhangs_kh() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : []
	});
}

var addStatement = WL.Server.createSQLStatement("insert into khachhang (Ma_KH, Ten_KH,Ngay_Sinh,Dia_Chi,CMND,SDT) values (?,?,?,?,?,?)");
function addQuanlybanhang_kh(Ma_KH, Ten_KH,Ngay_Sinh,Dia_Chi,CMND,SDT) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement,
		parameters : [Ma_KH, Ten_KH,Ngay_Sinh,Dia_Chi,CMND,SDT]
	});
}
	
var updateStatement = WL.Server.createSQLStatement("update khachhang SET Ten_KH=?, Ngay_Sinh=?, Dia_Chi=?, CMND=?, SDT=? WHERE Ma_KH=?");
function updateQuanlybanhang_kh(Ten_KH,Ngay_Sinh,Dia_Chi,CMND,SDT,Ma_KH) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement,
		parameters : [Ten_KH,Ngay_Sinh,Dia_Chi,CMND,SDT,Ma_KH]
	});
}

var deleteStatement = WL.Server.createSQLStatement("delete from khachhang WHERE Ma_KH=?");
function deleteQuanlybanhang_kh(Ma_KH) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement,
		parameters : [Ma_KH]
	});
}
/******************************************************************************
/* 
 * HOA DON 
// * */
var selectStatement_hd = WL.Server.createSQLStatement("select *from hoadon");

function getQuanlybanhangs_hd() {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement_hd,
		parameters : []
	});
}

var addStatement_hd = WL.Server.createSQLStatement("insert into hoadon (Ma_HD, Ma_KH, GiaTri_HD,Ngay_Hoa_Don) values (?,?,?,?)");

function addQuanlybanhang_hd(Ma_HD, Ma_KH, GiaTri_HD,Ngay_Hoa_Don) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement_hd,
		parameters : [Ma_HD, Ma_KH, GiaTri_HD,Ngay_Hoa_Don]
	});
}
	
var updateStatement_hd = WL.Server.createSQLStatement("update hoadon SET Ma_KH=?, GiaTri_HD=?, Ngay_Hoa_Don=? WHERE Ma_HD=?");

function updateQuanlybanhang_hd(Ma_KH, GiaTri_HD,Ngay_Hoa_Don,Ma_HD) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement_hd,
		parameters : [Ma_KH, GiaTri_HD,Ngay_Hoa_Don,Ma_HD]
	});
}

var deleteStatement_hd = WL.Server.createSQLStatement("delete from hoadon WHERE Ma_HD=?");

function deleteQuanlybanhang_hd(Ma_HD) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement_hd,
		parameters : [Ma_HD]
	});
}
/*******************************************************************************
/* 
 * CHI TIET HOA DON// * 
 * */

var selectStatement_cthd = WL.Server.createSQLStatement("select *from chitiethoadon");

function getQuanlybanhangs_cthd() {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement_cthd,
		parameters : []
	});
}

var addStatement_cthd = WL.Server.createSQLStatement("insert into chitiethoadon (ID_CTHD,Ma_HD, Ma_SP, So_Luong, Don_Gia, Thanh_tien) values (?,?,?,?,?,?)");

function addQuanlybanhang_cthd(ID_CTHD,Ma_HD, Ma_SP, So_Luong,Don_Gia,Thanh_tien) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement_cthd,
		parameters : [ID_CTHD,Ma_HD, Ma_SP, So_Luong,Don_Gia,Thanh_tien]
	});
}
	
var updateStatement_cthd = WL.Server.createSQLStatement("update chitiethoadon SET Ma_HD=? ,Ma_SP=?, So_Luong=?, Don_Gia=?, Thanh_tien=? WHERE ID_CTHD=?");

function updateQuanlybanhang_cthd(Ma_HD,Ma_SP, So_Luong, Don_Gia, Thanh_tien,ID_CTHD) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement_cthd,
		parameters : [Ma_HD,Ma_SP, So_Luong, Don_Gia, Thanh_tien,ID_CTHD]
	});
}

var deleteStatement_cthd = WL.Server.createSQLStatement("delete from chitiethoadon WHERE ID_CTHD=?");

function deleteQuanlybanhang_cthd(ID_CTHD) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement_cthd,
		parameters : [ID_CTHD]
	});
}
/******************************************************************************
/* 
 * SAN PHAM// * */

var selectStatement_sp = WL.Server.createSQLStatement("select *from sanpham");

function getQuanlybanhangs_sp() {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement_sp,
		parameters : []
	});
}

var addStatement_sp = WL.Server.createSQLStatement("insert into sanpham (Ma_SP,Ma_Loai_SP, Ten_SP, Gia_SP,Don_Vi_Tinh) values (?,?,?,?,?)");

function addQuanlybanhang_sp(Ma_SP,Ma_Loai_SP, Ten_SP, Gia_SP,Don_Vi_Tinh) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement_sp,
		parameters : [Ma_SP,Ma_Loai_SP, Ten_SP, Gia_SP,Don_Vi_Tinh]
	});
}
	
var updateStatement_sp = WL.Server.createSQLStatement("update sanpham SET Ma_Loai_SP=? Ten_SP=?, Gia_SP=?, Don_Vi_Tinh=?  WHERE Ma_SP=?");

function updateQuanlybanhang_sp(Ma_Loai_SP, Ten_SP, Gia_SP,Don_Vi_Tinh,Ma_SP) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement_sp,
		parameters : [Ma_Loai_SP, Ten_SP, Gia_SP,Don_Vi_Tinh,Ma_SP]
	});
}

var deleteStatement_sp = WL.Server.createSQLStatement("delete from sanpham WHERE Ma_SP=?");

function deleteQuanlybanhang_sp(Ma_SP) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement_sp,
		parameters : [Ma_SP]
	});
}
/*******************************************************************************
/* 
 * LOAI SAN PHAM// * 
 * */
var selectStatement_lsp = WL.Server.createSQLStatement("select *from loaisanpham");

function getQuanlybanhangs_lsp() {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement_lsp,
		parameters : []
	});
}

var addStatement_lsp = WL.Server.createSQLStatement("insert into loaisanpham (Ma_Loai_SP, Ten_Loai_SP,TGBH) values (?,?,?)");

function addQuanlybanhang_lsp(Ma_Loai_SP, Ten_Loai_SP, TGBH) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement_lsp,
		parameters : [Ma_Loai_SP, Ten_Loai_SP, TGBH]
	});
}
	
var updateStatement_lsp = WL.Server.createSQLStatement("update loaisanpham SET Ten_Loai_SP =?, TGBH =? WHERE Ma_Loai_SP =?");

function updateQuanlybanhang_lsp( Ten_Loai_SP, TGBH, Ma_Loai_SP ) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement_lsp,
		parameters : [Ten_Loai_SP, TGBH, Ma_Loai_SP ]
	});
}

var deleteStatement_lsp = WL.Server.createSQLStatement("delete from loaisanpham WHERE Ma_Loai_SP=?");

function deleteQuanlybanhang_lsp(Ma_Loai_SP) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement_lsp,
		parameters : [Ma_Loai_SP]
	});
}
