-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 04, 2022 at 04:39 AM
-- Server version: 5.7.15-log
-- PHP Version: 5.6.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `farm_purchase_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_customer`
--

CREATE TABLE `tb_customer` (
  `customer_code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_division`
--

CREATE TABLE `tb_division` (
  `division_code` varchar(45) NOT NULL,
  `division_name` varchar(200) NOT NULL,
  `division_detail` varchar(500) NOT NULL,
  `division_type_code` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_division`
--

INSERT INTO `tb_division` (`division_code`, `division_name`, `division_detail`, `division_type_code`) VALUES
('DI0001', 'โรงงานอาหารสัตว์', 'หน่วยงานโรงงานอาหารสัตว์', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_product`
--

CREATE TABLE `tb_product` (
  `product_code` varchar(50) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_vat_type` varchar(50) NOT NULL,
  `product_vat_value` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_product`
--

INSERT INTO `tb_product` (`product_code`, `product_name`, `product_vat_type`, `product_vat_value`) VALUES
('pro01', 'น้ำส้ม', 'น้ำ', 7),
('pro02', 'ไก่สด', 'ของสด', 7);

-- --------------------------------------------------------

--
-- Table structure for table `tb_purchase_request`
--

CREATE TABLE `tb_purchase_request` (
  `pr_code` int(50) NOT NULL,
  `purchase_request_date` date NOT NULL,
  `purchase_request_approve_status` varchar(50) NOT NULL,
  `purchase_request_status` varchar(50) NOT NULL,
  `purchase_request_cancel` tinyint(1) NOT NULL,
  `purchase_request_total` varchar(50) NOT NULL,
  `purchase_request_status_code` varchar(50) NOT NULL,
  `purchase_request_name` varchar(50) NOT NULL,
  `purchase_request_net_price` varchar(50) NOT NULL,
  `purchase_request_vat` varchar(50) NOT NULL,
  `purchase_request_vat_price` varchar(50) NOT NULL,
  `purchase_request_discount_price` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_purchase_request`
--

INSERT INTO `tb_purchase_request` (`pr_code`, `purchase_request_date`, `purchase_request_approve_status`, `purchase_request_status`, `purchase_request_cancel`, `purchase_request_total`, `purchase_request_status_code`, `purchase_request_name`, `purchase_request_net_price`, `purchase_request_vat`, `purchase_request_vat_price`, `purchase_request_discount_price`) VALUES
(1, '0000-00-00', '', '', 0, '4', '', '', '', '', '', ''),
(2, '0000-00-00', '', '', 0, '4.00', '', '', '', '', '', ''),
(5, '0000-00-00', '', 'PRS01-NEW', 0, '100.00', '', '', '', '', '', ''),
(16, '0000-00-00', 'Waiting', 'PRS01-NEW', 0, '50.00', '', '', '46.73', '7', '3.27', '50'),
(17, '0000-00-00', 'Waiting', 'PRS01-NEW', 0, '450.00', '', '', '420.56', '7', '29.44', '50');

-- --------------------------------------------------------

--
-- Table structure for table `tb_purchase_request_list`
--

CREATE TABLE `tb_purchase_request_list` (
  `purchase_request_list_code` varchar(50) NOT NULL,
  `purchase_request_code` varchar(50) NOT NULL,
  `product_code` varchar(50) NOT NULL,
  `purchase_request_list_no` int(11) NOT NULL,
  `purchase_request_list_name` varchar(50) NOT NULL,
  `purchase_request_list_price` varchar(50) NOT NULL,
  `purchase_request_list_qty` int(11) NOT NULL,
  `purchase_request_list_total` varchar(45) NOT NULL,
  `purchase_request_list_remark` text NOT NULL,
  `addby` varchar(50) NOT NULL,
  `adddate` datetime NOT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_purchase_request_status`
--

CREATE TABLE `tb_purchase_request_status` (
  `purchase_request_status_code` varchar(50) NOT NULL,
  `purchase_request_status_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_purchase_request_status`
--

INSERT INTO `tb_purchase_request_status` (`purchase_request_status_code`, `purchase_request_status_name`) VALUES
('PRS01-NEW', 'แบบร่าง'),
('PRS02-PROCESS-01', 'ดำเนินการจัดทำ');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `user_code` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_lastname` varchar(100) NOT NULL,
  `user_username` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_product`
--
ALTER TABLE `tb_product`
  ADD PRIMARY KEY (`product_code`);

--
-- Indexes for table `tb_purchase_request`
--
ALTER TABLE `tb_purchase_request`
  ADD PRIMARY KEY (`pr_code`);

--
-- Indexes for table `tb_purchase_request_list`
--
ALTER TABLE `tb_purchase_request_list`
  ADD PRIMARY KEY (`purchase_request_list_code`);

--
-- Indexes for table `tb_purchase_request_status`
--
ALTER TABLE `tb_purchase_request_status`
  ADD PRIMARY KEY (`purchase_request_status_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_purchase_request`
--
ALTER TABLE `tb_purchase_request`
  MODIFY `pr_code` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
