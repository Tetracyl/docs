__NUXT_JSONP__("/articles/log-files", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{article:{slug:"log-files",description:"Learn how to create log files for sending to System76 support\n",title:u,keywords:["system76","driver","logs",w,"support"],facebookImage:"\u002F_nuxt\u002Fimages\u002Flog-files-facebookImage.jpg",twitterImage:"\u002F_nuxt\u002Fimages\u002Flog-files-twitterImage.jpg",hidden:false,section:"software-troubleshooting",toc:[{id:x,depth:3,text:u}],body:{type:"root",children:[{type:b,tag:"h3",props:{id:x},children:[{type:b,tag:n,props:{href:"#creating-log-files",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:u}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:a,value:"Log files help our support team learn more about your system, and can be a great benefit during troubleshooting."}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:a,value:"Among the information collected by the log files includes:"}]},{type:a,value:d},{type:b,tag:"ul",props:{},children:[{type:a,value:d},{type:b,tag:l,props:{},children:[{type:a,value:"The installed operating system and active kernel version"}]},{type:a,value:d},{type:b,tag:l,props:{},children:[{type:a,value:"A listing of the filesystems connected to your system, and the space used"}]},{type:a,value:d},{type:b,tag:l,props:{},children:[{type:a,value:"Information about your firmware"}]},{type:a,value:d},{type:b,tag:l,props:{},children:[{type:a,value:"A list of disks connected to your system, as well as connected USB devices"}]},{type:a,value:d},{type:b,tag:l,props:{},children:[{type:a,value:"Sensors information showing temperatures and fanspeeds"}]},{type:a,value:d},{type:b,tag:l,props:{},children:[{type:a,value:"Comprehensive output from "},{type:b,tag:s,props:{},children:[{type:a,value:w}]},{type:a,value:" and "},{type:b,tag:s,props:{},children:[{type:a,value:"journalctl"}]}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:v,props:{id:"generating-log-files-using-the-system76-driver-application"},children:[{type:b,tag:n,props:{href:"#generating-log-files-using-the-system76-driver-application",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:"Generating Log Files Using the System76 Driver Application"}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:a,value:"The System76 Driver can be opened by clicking the "},{type:b,tag:j,props:{},children:[{type:a,value:y}]},{type:a,value:" button in the top left (or pressing the Ubuntu or Pop key), then searching for 'System76.' Among the applications listed should be the "},{type:b,tag:j,props:{},children:[{type:a,value:t}]},{type:a,value:" application. Go ahead and click the icon to launch the application, and enter your password when prompted to do so."}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:a,value:"Next click on the button outlined in red in the "},{type:b,tag:j,props:{},children:[{type:a,value:t}]},{type:a,value:" application and there will be a file called "},{type:b,tag:s,props:{},children:[{type:a,value:"system76-logs.tgz"}]},{type:a,value:" placed in your Home directory (\u002Fhome\u002Fusername)"}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:b,tag:"nuxt-picture",props:{alt:"CreateLogFiles",src:"\u002Fimages\u002Fsystem76-driver\u002FCreateLogFiles.png"},children:[]}]},{type:a,value:d},{type:b,tag:v,props:{id:"manually-generating-log-files"},children:[{type:b,tag:n,props:{href:"#manually-generating-log-files",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:"Manually Generating Log Files"}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:a,value:"If for some reason you are unable to access the "},{type:b,tag:j,props:{},children:[{type:a,value:t}]},{type:a,value:" application, you can manually create a set of logs files by running a series of commands via the Terminal application. To do this, click "},{type:b,tag:j,props:{},children:[{type:a,value:y}]},{type:a,value:" in the top left of your system, search for "},{type:b,tag:j,props:{},children:[{type:a,value:"Terminal"}]},{type:a,value:", then open the application that appears."}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:a,value:"From there, you can enter the following commands:"}]},{type:a,value:d},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["shiki"],style:"background-color: var(--code-00)"},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:"color: var(--code-0C)"},children:[{type:a,value:"cd"}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:k}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:z}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"mkdir "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:A}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"journalctl "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:m}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:k}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:"\u002Fsystem76\u002Fjournal.log"}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"dmesg "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:m}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:k}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:"\u002Fsystem76\u002Fdmesg.log"}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"cp "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:"\u002F.local\u002Fshare\u002Fxorg\u002FXorg.0.log "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:"\u002Fsystem76\u002FXorg.0.log"}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"sudo dmidecode "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:m}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:k}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:"\u002Fsystem76\u002Fdemidecode"}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"sudo lspci -vv "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:m}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:k}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:"\u002Fsystem76\u002Flscpi.log"}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"sudo lsusb -vv "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:m}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:k}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:"\u002Fsystem76\u002Flsusb.log"}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"uname -a "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:m}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:k}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:"\u002Fsystem76\u002Funame.log"}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"cp \u002Fetc\u002Fos-release "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:"\u002Fsystem76\u002Fos-release"}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"tar czf system76-log.tgz "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:C}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"rm "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:C}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:b,tag:c,props:{style:e},children:[{type:a,value:"rmdir "}]},{type:b,tag:c,props:{style:f},children:[{type:a,value:h}]},{type:b,tag:c,props:{style:e},children:[{type:a,value:A}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[]}]}]}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:a,value:"As with the "},{type:b,tag:j,props:{},children:[{type:a,value:t}]},{type:a,value:" application, the log files will be stored within your home directory."}]},{type:a,value:d},{type:b,tag:v,props:{id:"sending-the-logs-to-the-support-team"},children:[{type:b,tag:n,props:{href:"#sending-the-logs-to-the-support-team",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:"Sending the Logs to the Support Team"}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:a,value:"Once the logs are created, you can either attach them directly to the support case, or you can email them to "},{type:b,tag:n,props:{href:"mailto:info@system76.com"},children:[{type:a,value:"info@system76.com"}]},{type:a,value:" and reference your case number."}]}]},dir:z,path:"\u002Flog-files",extension:".md",createdAt:D,updatedAt:D,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fe54bdadaf285cdda4147b9f7bfc8a53111584b5a",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{"/_ipx/images/system76-driver/CreateLogFiles.png?w=320&f=png":"\u002F_nuxt\u002Fimage\u002Fffd404.png","/_ipx/images/system76-driver/CreateLogFiles.png?w=640&f=png":"\u002F_nuxt\u002Fimage\u002Fab42f6.png","/_ipx/images/system76-driver/CreateLogFiles.png?w=768&f=png":"\u002F_nuxt\u002Fimage\u002Fc99a76.png","/_ipx/images/system76-driver/CreateLogFiles.png?w=1024&f=png":"\u002F_nuxt\u002Fimage\u002Fe1842b.png","/_ipx/images/system76-driver/CreateLogFiles.png?w=1280&f=png":"\u002F_nuxt\u002Fimage\u002F696845.png","/_ipx/images/system76-driver/CreateLogFiles.png?w=1536&f=png":"\u002F_nuxt\u002Fimage\u002Ff4dca6.png","/_ipx/images/system76-driver/CreateLogFiles.png?w=320&f=webp":"\u002F_nuxt\u002Fimage\u002F086a57.webp","/_ipx/images/system76-driver/CreateLogFiles.png?w=640&f=webp":"\u002F_nuxt\u002Fimage\u002Fa8cd38.webp","/_ipx/images/system76-driver/CreateLogFiles.png?w=768&f=webp":"\u002F_nuxt\u002Fimage\u002F00d063.webp","/_ipx/images/system76-driver/CreateLogFiles.png?w=1024&f=webp":"\u002F_nuxt\u002Fimage\u002F56267a.webp","/_ipx/images/system76-driver/CreateLogFiles.png?w=1280&f=webp":"\u002F_nuxt\u002Fimage\u002F7f5b81.webp","/_ipx/images/system76-driver/CreateLogFiles.png?w=1536&f=webp":"\u002F_nuxt\u002Fimage\u002Fe61c15.webp"}}],fetch:{},mutations:void 0}}("text","element","span","\n","color: var(--code-0F)","color: var(--code-0A)","line","~","p","u"," ","li","\u003E","a","true",-1,"icon","icon-link","code","System76 Driver","Creating Log Files","h4","syslog","creating-log-files","Activities","\u002F","\u002Fsystem76","\u002Fsystem76\u002F","*","2021-07-15T15:03:36.501Z")));