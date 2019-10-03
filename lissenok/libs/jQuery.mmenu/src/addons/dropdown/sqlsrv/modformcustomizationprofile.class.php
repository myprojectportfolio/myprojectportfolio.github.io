yclut stuffclut ftoint mclut stuffclut ftoint cclut stuffclut}for}b/doclutimage
{/rgbclut exch def pop invalidcolortable?{computecmykclut}if/4compute cclut
mclut yclut kclut spconcattransfer iw ih bpc[iw 0 0 ih 0 0][setupimageproc/exec
load/dup load dup dup]cvx nullproc nullproc nullproc true 4 colorimage}b}
DefIf_E ncolors 0 eq DefIf_B{/lookupandstore{3 mul 3 getinterval putinterval
exch 3 add exch 3 copy}b/8lookup/lookupandstore load def/4lookup{/byte 1 index
def -4 bitshift lookupandstore byte 15 and lookupandstore}b/2lookup{/byte 1
index def -6 bitshift lookupandstore byte -4 bitshift 3 and lookupandstore byte
-2 bitshift 3 and lookupandstore byte 3 and lookupandstore}b/1lookup{/byte exch
def -7 1 0{byte exch bitshift 1 and lookupandstore}bind for}b/colorexpand
{mystringexp 0 rgbclut 3 copy 7 -1 roll/mylookup load forall pop pop pop pop
pop}b/createexpandstr{/mystringexp exch mystring length mul string def}b
/doclutimage{/rgbclut exch def pop/mylookup bpc 8 eq{3 createexpandstr/8lookup}
{bpc 4 eq{6 createexpandstr/4lookup}{bpc 2 eq{12 createexpandstr/2lookup}{24
createexpandstr/1lookup}ifelse}ifelse}ifelse load def iw ih 8[iw 0 0 ih 0 0]
[setupimageproc/exec load/colorexpand load/exec load]cvx false 3 colorimage}b}
DefIf_E/colorimage where{pop true}{false}ifelse DefIf_B{/do24image{iw ih 8[iw 0
0 ih 0 0]setupimageproc false 3 colorimage}b}DefIf_El{/rgbtogray{/str exch def
/len str length def/smlen len 3 idiv def/rstr str def/gstr str 1 len 1 sub
getinterval def/bstr str 2 len 2 sub getinterval def str dup 0 1 smlen 1 sub
{dup 3 mul rstr 1 index get .3 mul gstr 2 index get .59 mul add bstr 3 -1 roll
get .11 mul add round cvi put dup}for pop 0 smlen getinterval}b/do24image{iw ih
8[iw 0 0 ih 0 0][setupimageproc/exec load/rgbtogray load/exec load]cvx bind
image}b}DefIf_E/doNimage{bpc 24 eq{do24image}{iw ih bpc[iw 0 0 ih 0 0]
setupimageproc image}ifelse}b}DefIf_E 
%%EndResource

%%BeginResource: file Adobe_WinNT_Co_Images_L2 2.0 0
L2? DefIf_B{/doclutimage{/rgbclut exch def pop/hival 1 bpc{2 mul}repeat 1 sub
def[/Indexed colspABC hival rgbclut]setcolorspace myimagedict dup begin/Width
iw def/Height ih def/Decode[0 hival]def/ImageMatrix[iw 0 0 ih 0 0]def
/DataSource setupimageproc def/BitsPerComponent bpc def/Interpolate smoothflag
def end image}b/doNimage{bpc 24 eq{colspABC}{colspA}ifelse setcolorspace
m