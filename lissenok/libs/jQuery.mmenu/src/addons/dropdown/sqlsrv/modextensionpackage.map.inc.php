ind for pop}bind for end
grestore}bind def}DefIf_E 
%%EndResource
   
%%BeginResource: file Adobe_WinNT_BW_Images 2.0 0
/iw 0 def/ih 0 def/im_save 0 def/setupimageproc 0 def/polarity 0 def/smoothflag
0 def/mystring 0 def/bpc 0 def/setup1asciiproc{[currentfile mystring
/readhexstring cvx/pop cvx]cvx bind}b/setup1binaryproc{[currentfile mystring
/readstring cvx/pop cvx]cvx bind}b/setup2asciiproc{currentfile/ASCII85Decode
filter/RunLengthDecode filter}b/setup2binaryproc{currentfile/RunLengthDecode
filter}b/mycolorspace{colspABC}def/myimagedict{/myimagedict 10 dict def
myimagedict dup begin/ImageType 1 def/MultipleDataSource false def end}b
/imageprocarray[/setup1binaryproc/setup1asciiproc/setup2binaryproc
/setup2asciiproc]def/L2Polarity{{[1 0]}{[0 1]}ifelse}b/beginimage{/im_save save
def imageprocarray exch get/setupimageproc exch load def L2Polarity/polarity
exch def/smoothflag exch def translate/dx 2 index def/dy 1 index abs def scale
/mystring exch string def/bpc exch def/ih exch def/iw exch def}b/endimage
{im_save restore}b/1bitmaskimage{sgco myimagedict dup begin/Width iw def/Height
ih def/Decode polarity def/ImageMatrix[iw 0 0 ih 0 0]def/DataSource
setupimageproc def/BitsPerComponent 1 def/Interpolate smoothflag def end
imagemask}b/1bitcopyimage{sgco 0 0 1 dx div 1 dy div 1 2 index sub 1 2 index
sub L2?{4}{6}ifelse -2 roll pop pop rf 1bitmaskimage}b/1bitbwcopyimage{0 true 1
true 1bitcopyimage}b 
%%EndResource

%%BeginResource: file Adobe_WinNT_BW_Images_L1 2.0 0
L2? not DefIf_B{/setup2asciiproc{[/Level2ImagesError load aload pop true
FatalErrorIf}b/setup2binaryproc/setup2asciiproc load def/L2Polarity{}def
/1bitmaskimage{sgco iw ih polarity[iw 0 0 ih 0 0]setupimageproc imagemask}b}
DefIf_E 
%%EndResource

%%BeginResource: file Adobe_WinNT_Co_Images_L1 2.0 0
L2? not DefIf_B{/isdefined{where dup{exch pop}if