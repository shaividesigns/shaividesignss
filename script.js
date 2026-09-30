(function(){
  const timeEl=document.getElementById('local-time');
  function updateTime(){
    try{
      const now=new Date();
      const parts=new Intl.DateTimeFormat('en-IN',{timeZone:'Asia/Kolkata',hour:'numeric',minute:'2-digit',hour12:true}).formatToParts(now);
      const h=parts.find(x=>x.type==='hour')?.value||'1';
      const m=parts.find(x=>x.type==='minute')?.value||'03';
      const d=parts.find(x=>x.type==='dayPeriod')?.value||'pm';
      timeEl.textContent=`${h}:${m} ${d} IST`;
    }catch(e){}
  }
  updateTime();setInterval(updateTime,30000);
})();
