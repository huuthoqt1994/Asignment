-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2016-07-27 15:56:09.206

-- tables
-- Table: Chi_Tiet_Hoa_Don
CREATE TABLE Chi_Tiet_Hoa_Don (
    Ma_HD varchar(20) NOT NULL,
    Ma_SP varchar(20) NOT NULL,
    So_Luong int NOT NULL,
    Don_Gia int NOT NULL,
    Thanh_Tien int NOT NULL,
    HoaDon_Ma_HD varchar(20) NOT NULL,
    SanPham_Ma_SP varchar(20) NOT NULL,
    CONSTRAINT Chi_Tiet_Hoa_Don_pk PRIMARY KEY (Ma_HD,Ma_SP)
) COMMENT ''
COMMENT 'Chi tiết hóa đơn';

-- Table: HoaDon
CREATE TABLE HoaDon (
    Ma_HD varchar(20) NOT NULL,
    Ma_KH varchar(20) NOT NULL,
    Ngay_Hoa_Don date NOT NULL,
    KhachHang_Ma_KH varchar(20) NOT NULL,
    CONSTRAINT HoaDon_pk PRIMARY KEY (Ma_HD)
) COMMENT ''
COMMENT 'Hóa đơn';

-- Table: KhachHang
CREATE TABLE KhachHang (
    Ma_KH varchar(20) NOT NULL,
    Ten_KH varchar(30) NOT NULL,
    Ngay_Sinh date NOT NULL,
    Dia_Chi varchar(100) NOT NULL,
    CMND varchar(12) NOT NULL,
    SDT varchar(11) NOT NULL,
    CONSTRAINT KhachHang_pk PRIMARY KEY (Ma_KH)
) COMMENT ''
COMMENT 'khách hàng';

-- Table: LoaiSanPham
CREATE TABLE LoaiSanPham (
    Ma_Loai varchar(20) NOT NULL,
    Ten_Loai_SP varchar(30) NOT NULL,
    CONSTRAINT LoaiSanPham_pk PRIMARY KEY (Ma_Loai)
) COMMENT ''
COMMENT 'Loại Sản phẩm
';

-- Table: SanPham
CREATE TABLE SanPham (
    Ma_SP varchar(20) NOT NULL,
    Ten_SP varchar(30) NOT NULL,
    Don_Vi_Tinh varchar(20) NOT NULL,
    Ma_Loai varchar(20) NOT NULL,
    Loai_SP varchar(20) NOT NULL,
    LoaiSanPham_Ma_Loai varchar(20) NOT NULL,
    CONSTRAINT SanPham_pk PRIMARY KEY (Ma_SP)
) COMMENT ''
COMMENT 'Bảng Sản Phẩm';

-- foreign keys
-- Reference: Chi_Tiet_Hoa_Don_HoaDon (table: Chi_Tiet_Hoa_Don)
ALTER TABLE Chi_Tiet_Hoa_Don ADD CONSTRAINT Chi_Tiet_Hoa_Don_HoaDon FOREIGN KEY Chi_Tiet_Hoa_Don_HoaDon (HoaDon_Ma_HD)
    REFERENCES HoaDon (Ma_HD);

-- Reference: Chi_Tiet_Hoa_Don_SanPham (table: Chi_Tiet_Hoa_Don)
ALTER TABLE Chi_Tiet_Hoa_Don ADD CONSTRAINT Chi_Tiet_Hoa_Don_SanPham FOREIGN KEY Chi_Tiet_Hoa_Don_SanPham (SanPham_Ma_SP)
    REFERENCES SanPham (Ma_SP);

-- Reference: HoaDon_KhachHang (table: HoaDon)
ALTER TABLE HoaDon ADD CONSTRAINT HoaDon_KhachHang FOREIGN KEY HoaDon_KhachHang (KhachHang_Ma_KH)
    REFERENCES KhachHang (Ma_KH);

-- Reference: SanPham_LoaiSanPham (table: SanPham)
ALTER TABLE SanPham ADD CONSTRAINT SanPham_LoaiSanPham FOREIGN KEY SanPham_LoaiSanPham (LoaiSanPham_Ma_Loai)
    REFERENCES LoaiSanPham (Ma_Loai);

-- End of file.

