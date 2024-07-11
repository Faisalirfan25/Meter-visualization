CREATE DATABASE meters;
USE meters;
CREATE TABLE water (
  serial_no INT PRIMARY KEY,
  meter_type VARCHAR(50) NOT NULL,
  current_month_reading DECIMAL(10, 2) NOT NULL,
  bill DECIMAL(10, 2) NOT NULL,
  pdf_bill VARCHAR(100) NOT NULL
);

CREATE TABLE electric (
  serial_no INT PRIMARY KEY,
  meter_type VARCHAR(50) NOT NULL,
  current_month_reading DECIMAL(10, 2) NOT NULL,
  bill DECIMAL(10, 2) NOT NULL,
  pdf_bill VARCHAR(100) NOT NULL
);

CREATE TABLE gas (
  serial_no INT PRIMARY KEY,
  meter_type VARCHAR(50) NOT NULL,
  current_month_reading DECIMAL(10, 2) NOT NULL,
  bill DECIMAL(10, 2) NOT NULL,
  pdf_bill VARCHAR(100) NOT NULL
);


INSERT INTO water (serial_no, meter_type, current_month_reading, bill, pdf_bill)
VALUES
  (1128223, 'Water', 156232.2, 1562322, 'pdfs/water/1128223.pdf'),
  (1128636, 'Water', 1611, 16110, 'pdfs/water/1128636.pdf'),
  (1128955, 'Water', 1721.4, 17214, 'pdfs/water/1128955.pdf'),
  (1134517, 'Water', 140038.8, 1400388, 'pdfs/water/1134517.pdf'),
  (1138360, 'Water', 70157.4, 701574, 'pdfs/water/1138360.pdf'),
  (1138841, 'Water', 10827.6, 108276, 'pdfs/water/1138841.pdf'),
  (1146206, 'Water', 62218.8, 622188, 'pdfs/water/1146206.pdf'),
  (1148682, 'Water', 57125.1, 571251, 'pdfs/water/1148682.pdf'),
  (1149690, 'Water', 32272.2, 322722, 'pdfs/water/1149690.pdf'),
  (1150147, 'Water', 1197.6, 11976, 'pdfs/water/1150147.pdf');

INSERT INTO electric (serial_no, meter_type, current_month_reading, bill, pdf_bill)
VALUES
  (1128892, 'Electric', 1489.5, 14895, 'pdfs/electric/1128892.pdf'),
  (1128893, 'Electric', 1640.4, 16404, 'pdfs/electric/1128893.pdf'),
  (1128954, 'Electric', 1321.2, 13212, 'pdfs/electric/1128954.pdf'),
  (1129686, 'Electric', 1405.5, 14055, 'pdfs/electric/1129686.pdf'),
  (1129688, 'Electric', 1250.7, 12507, 'pdfs/electric/1129688.pdf'),
  (1129763, 'Electric', 1506.3, 15063, 'pdfs/electric/1129763.pdf'),
  (1129765, 'Electric', 269.4, 2694, 'pdfs/electric/1129765.pdf'),
  (1129887, 'Electric', 667.2, 6672, 'pdfs/electric/1129887.pdf'),
  (1130228, 'Electric', 102, 1020, 'pdfs/electric/1130228.pdf'),
  (1141376, 'Electric', 1737.6, 17376, 'pdfs/electric/1141376.pdf');

INSERT INTO gas (serial_no, meter_type, current_month_reading, bill, pdf_bill)
VALUES
  (1129890, 'Gas', 638.4, 6384, 'pdfs/gas/1129890.pdf'),
  (1130226, 'Gas', 2872.5, 28725, 'pdfs/gas/1130226.pdf'),
  (1130341, 'Gas', 0.6, 6, 'pdfs/gas/1130341.pdf'),
  (1130344, 'Gas', 2263.5, 22635, 'pdfs/gas/1130344.pdf'),
  (1134358, 'Gas', 255408.9, 2554089, 'pdfs/gas/1134358.pdf'),
  (1138087, 'Gas', 67419.3, 674193, 'pdfs/gas/1138087.pdf'),
  (1138335, 'Gas', 47538.3, 475383, 'pdfs/gas/1138569.pdf'),
  (1138569, 'Gas', 40369.5, 403695, 'pdfs/gas/1138569.pdf'),
  (1138570, 'Gas', 200.4, 2004, 'pdfs/gas/1138570.pdf'),
  (1150150, 'Gas', 18249, 182490, 'pdfs/gas/1150150.pdf');