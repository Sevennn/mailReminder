var schedule = require("node-schedule");
import mailsys from './mail';
export default {
    setTask: (enddate, des,title,freqtime)=>{
        var freqtimeStr = "0 " + freqtime.split(":")[1] + " " + freqtime.split(":")[0] +" * * *";
        var tast = schedule.scheduleJob({start: new Date(), end: enddate, rule:freqtimeStr}, function(){
            mailsys.sendmail(title,des)
            .then(r=>console.log("Send!"))
            .catch(e=>console.log(e));
        });
    }
}




                    
