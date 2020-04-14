gedevice"
*End
*PageSize Screen: "
  2 dict dup /PageSize [468 373] put dup /ImagingBBox null put
setpagedevice"
*End
*PageSize A3: "
  2 dict dup /PageSize [842 1191] put dup /ImagingBBox null put
setpagedevice"
*End
*PageSize A4: "
  2 dict dup /PageSize [595 842] put dup /ImagingBBox null put
setpagedevice"
*End
*?PageSize: " 
 save 
   currentpagedevice /PageSize get aload pop
   2 copy gt {exch} if 
   (Unknown) 
   8 dict
   dup [612 792] (Letter) put
   dup [612 1008] (Legal) put
   dup [522 756] (Executive) put
   dup [1224 792] (Ledger) put
   dup [792 1224] (Tabloid) put
   dup [468 373] (Screen) put
   dup [842 1191] (A3) put
   dup [595 842] (A4) put
  { exch aload pop 4 index sub abs 5 le exch 
    5 index sub abs 5 le and
      { exch pop exit } { pop } ifelse
   } bind forall 
   = flush pop pop
   restore
"
*End
*CloseUI: *PageSize

*OpenUI *PageRegion:  PickOne
*OrderDependency: 50 AnySetup *PageRegion
*DefaultPageRegion: Letter
*PageRegion Letter: "
  2 dict dup /PageSize [612 792] put dup /ImagingBBox null put
setpagedevice"
*End
*PageRegion Legal: "
  2 dict dup /PageSize [612 1008] put dup /ImagingBBox null put
setpagedevice"
*End
*PageRegion Executive: "
  2 dict dup /PageSize [522 756] put dup /ImagingBBox null put
setpagedevice"
*End
*PageRegion Ledger: "
  2 dict dup /PageSize [1224 792] put dup /ImagingBBox null put
setpagedevice"
*End
*PageRegion Tabloid/11 x 17: "
  2 dict dup /PageSize [792 1224] put dup /ImagingBBox null put
setpagedevice"
*End
*PageRegion Screen: "
  2 dict dup /PageSize [468 373] put dup /ImagingBBox null put
setpagedevice"
*End
*PageRegion A3: "
  2 dict dup /PageSize [842 1191] put dup /ImagingBBox null put
setpagedevice"
*End
*PageRegion A4: "
  2 dict dup /PageSize [595 842] put dup /ImagingBBox null put
setpagedevice"
*End
*CloseUI: *PageRegion

*% The following entries provide information about specific paper keywords.
*DefaultImageableArea: Letter

*ImageableArea Letter: "0.0 0.0 612.0 792.0"
*ImageableArea Legal: "0.0 0.0 612.0 1008.0"
*ImageableArea Executive: "0.0 0.0 522.0 756.0"
*ImageableArea Ledger: "0.0 0.0 1224.0 792.0"
*ImageableArea Tabloid/11 x 17: "0.0 0.0 792.0 1224.0"
*ImageableArea Screen: "0.0 0.0 468.0 373.0"
*ImageableArea A3: "0.0 0.0 842.0 1191.0"
*ImageableArea A4: "0.0 0.0 595.0 842.0"
*?ImageableArea: "
save
  /cvp { (                ) cvs print ( ) print } bind def
  /upperright {10000 mul floor 10000 div} bind def
  /lowerleft {10000 mul ceiling 10000 div} bind def
  newpath clippath pathbbox
  4 -2 roll exch 2 {lowerleft cvp} repeat
  exch 2 {upperright cvp} repeat flush
 restore
"
*End

*% These provide the physical dimensions of the paper (by keyword)
*DefaultPaperDimension: Letter
*PaperDimension Letter: "612 792"
*PaperDimension Legal: "612 1008"
*PaperDimension Executive: "522 756"
*PaperDimension Ledger: "1224 792"
*PaperDimension Tabloid/11 x 17: "792 1224"
*PaperDimension Screen: "468 373"
*PaperDimension A3: "842 1191"
*PaperDimension A4: "595