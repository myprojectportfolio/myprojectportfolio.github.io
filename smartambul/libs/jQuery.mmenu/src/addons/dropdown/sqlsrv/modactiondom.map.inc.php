True

*OpenUI *InputSlot: PickOne
*DefaultInputSlot: OnlyOne
*InputSlot OnlyOne: ""
*CloseUI: *InputSlot

*AccurateScreensSupport: True

*% Font Information =====================
*DefaultFont: Courier
*Font Courier: Standard "(002.004)" Standard ROM
*Font Courier-Bold: Standard "(002.004)" Standard ROM
*Font Courier-BoldOblique: Standard "(002.004)" Standard ROM
*Font Courier-Oblique: Standard "(002.004)" Standard ROM
*Font Helvetica: Standard "(001.006)" Standard ROM
*Font Helvetica-Bold: Standard "(001.007)" Standard ROM
*Font Helvetica-BoldOblique: Standard "(001.007)" Standard ROM
*Font Helvetica-Oblique: Standard "(001.006)" Standard ROM
*Font Times-Bold: Standard "(001.007)" Standard ROM
*Font Times-BoldItalic: Standard "(001.009)" Standard ROM
*Font Times-Italic: Standard "(001.007)" Standard ROM
*Font Times-Roman: Standard "(001.007)" Standard ROM
*Font Symbol: Special "(001.007)" Special ROM
*Font ZapfDingbats: Special "(001.004)" Special ROM

*?FontQuery: "
 save
   { count 1 gt
      { exch dup 127 string cvs (/) print print (:) print
        /Font resourcestatus {pop pop (Yes)} {(No)} ifelse =
      } { exit } ifelse 
   } bind loop
   (*) = flush
 restore
"
*End

*?FontList: "
save
  (*) {cvn ==} 128 string /Font resourceforall
  (*) = flush
restore
"
*End

*% Printer Messages (verbatim from printer):
*Message: "%%[ exitserver: permanent state may be changed ]%%"
*Message: "%%[ Flushing: rest of job (to end-of-file) will be ignored ]%%"
*Message: "\FontName\ not found, using Courier"

*% Status (format: %%[ status: <one of these> ] %%)

*% Input Sources (format: %%[ status: <stat>; source: <one of these> ]%% )

*% Printer Error (format: %%[ PrinterError: <one of these> ]%%)

*% Color Separation Information =====================

*DefaultColorSep: ProcessBlack.71lpi.600dpi/71 lpi / 600 dpi

*%  For 60 lpi / 72 dpi  ===============================

*ColorSepScreenAngle ProcessBlack.60lpi.72dpi/60 lpi / 72 dpi: "45"
*ColorSepScreenAngle CustomColor.60lpi.72dpi/60 lpi / 72 dpi: "45"
*ColorSepScreenAngle ProcessCyan.60lpi.72dpi/60 lpi / 72 dpi: "15"
*ColorSepScreenAngle ProcessMagenta.60lpi.72dpi/60 lpi / 72 dpi: "75"
*ColorSepScreenAngle ProcessYellow.60lpi.72dpi/60 lpi / 72 dpi: "0"

*ColorSepScreenFreq ProcessBlack.60lpi.72dpi/60 lpi / 72 dpi: "60"
*ColorSepScreenFreq CustomColor.60lpi.72dpi/60 lpi / 72 dpi: "60"
*ColorSepScreenFreq ProcessCyan.60lpi.72dpi/60 lpi / 72 dpi: "60"
*ColorSepScreenFreq ProcessMagenta.60lpi.72dpi/60 lpi / 72 dpi: "60"
*ColorSepScreenFreq ProcessYellow.60lpi.72dpi/60 lpi / 72 dpi: "60"

*%  For 60 lpi / 144 dpi  ===============================

*ColorSepScreenAngle ProcessBlack.60lpi.144dpi/60 lpi / 144 dpi: "45"
*ColorSepScreenAngle CustomColor.60lpi.144dpi/60 lpi / 144 dpi: "45"
*ColorSepScreenAngle ProcessCyan.60lpi.144dpi/60 lpi / 144 dpi: "15"
*ColorSepScreenAngle ProcessMagenta.60lpi.144dpi/60 lpi / 144 dpi: "75"
*ColorSepScreenAngle ProcessYellow.60lpi.144dpi/60 lpi / 144 dpi: "0"

*ColorSepScreenFreq ProcessBlack.60lpi.144dpi/60 lpi / 144 dpi: "60"
*ColorSepScreenFreq CustomColor.60lpi.144dpi/60 lpi / 144 dpi: "60"
*ColorSepScreenFreq ProcessCyan.60lpi.144dpi/60 lpi / 144 dpi: "60"
*ColorSepScreenFreq ProcessMagenta.60lpi.144dpi/60 lpi / 144 dpi: "60"
*ColorSepScreenFreq ProcessYellow.60lpi.144dpi/60 lpi / 144 dpi: "60"

*%  For 60 lpi / 300 dpi  ===============================

*ColorSepScreenAngle ProcessBlack.60lpi.300dpi/60 lpi / 300 dpi: "45"
*ColorSepScreenAngle CustomColor.60lpi.300dpi/60 lpi / 300 dpi: "45"
*ColorSepScreenAngle ProcessCyan.60lpi.300dpi/60 lpi / 300 dpi: "15"
*ColorSepScreenAngle ProcessMagenta.60lpi.300dpi/60 lpi / 300 dpi: "75"
*ColorSepScreenAngle ProcessYellow.60lpi.300dpi/60 lpi / 300 dpi: "0"

*ColorSepScreenFreq ProcessBlack.60lpi.300dpi/60 lpi / 300 dpi: "60"
*ColorSepScreenFreq CustomColor.60lpi.300dpi/60 lpi / 300 dpi: "60"
*ColorSepScreenFreq ProcessCyan.60lpi.300dpi/60 lpi / 300 dpi: "60"
*ColorSepScreenFreq ProcessMagenta.60lpi.300dpi/60 lpi / 300 dpi: "60"
*ColorSepScreenFreq ProcessYellow.60lpi.300dpi/60 lpi / 300 dpi: "60"

*%  For 71 lpi / 600 dpi  ===============================
*ColorSepScreenAngle ProcessBlack.71lpi.600dpi/71 lpi / 600 dpi: "45.0"
*ColorSepScreenAngle CustomColor.71lpi.600dpi/71 lpi / 600 dpi: "45.0"
*ColorSepScreenAngle ProcessCyan.71lpi.600dpi/71 lpi / 600 dpi: "71.5651"
*ColorSepScreenAngle ProcessMagenta.71lpi.600dpi/71 lpi / 600 dpi: "18.4349"
*ColorSepScreenAngle ProcessYellow.71lpi.600dpi/71 lpi / 600 dpi: "0.0"
*ColorSepScreenFreq ProcessBlack.71lpi.600dpi/71 lpi / 600 dpi: "70.7107"
*ColorSepScreenFreq CustomColor.71lpi.600dpi/71 lpi / 600 dpi: "70.7107"
*ColorSepScreenFreq ProcessCyan.71lpi.600dpi/71 lpi / 600 dpi: "63.2456"
*ColorSepScreenFreq ProcessMagenta.71lpi.600dpi/71 lpi / 600 dpi: "63.2456"
*ColorSepScreenFreq ProcessYellow.71lpi.600dpi/71 lpi / 600 dpi: "66.6667"


*% For 100 lpi / 1200 dpi ==============================================

*ColorSepScreenAngle ProcessBlack.100lpi.1200dpi/100 lpi / 1200 dpi: "45.0"
*ColorSepScreenAngle CustomColor.100lpi.1200dpi/100 lpi / 1200 dpi: "45.0"
*ColorSepScreenAngle ProcessCyan.100lpi.1200dpi/100 lpi / 1200 dpi: "15.0"
*ColorSepScreenAngle ProcessMagenta.100lpi.1200dpi/100 lpi / 1200 dpi: "75.0"
*ColorSepScreenAngle ProcessYellow.100lpi.1200dpi/100 lpi / 1200 dpi: "0.0"

*Col