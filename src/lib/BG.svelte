   <!-- Glowing Blob Background -->
   <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-screen h-[500px] bg-blue-800/30 rounded-full blur-[150px] animate-pulse"></div>
    
   <!-- Moving Dots Background -->
   <div class="absolute inset-0 overflow-hidden">
       <div class="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float1" style="top: 10%; left: 20%;"></div>
       <div class="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float2" style="top: 30%; left: 80%;"></div>
       <div class="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float3" style="top: 70%; left: 40%;"></div>
       <div class="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float4" style="top: 50%; left: 60%;"></div>
       <div class="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float5" style="top: 80%; left: 30%;"></div>
       <style>
           @keyframes float1 {
               0%, 100% { transform: translate(0, 0); }
               50% { transform: translate(100px, 50px); }
           }
           @keyframes float2 {
               0%, 100% { transform: translate(0, 0); }
               50% { transform: translate(-80px, 60px); }
           }
           @keyframes float3 {
               0%, 100% { transform: translate(0, 0); }
               50% { transform: translate(60px, -40px); }
           }
           @keyframes float4 {
               0%, 100% { transform: translate(0, 0); }
               50% { transform: translate(-50px, -50px); }
           }
           @keyframes float5 {
               0%, 100% { transform: translate(0, 0); }
               50% { transform: translate(70px, -30px); }
           }
           .animate-float1 { animation: float1 8s infinite ease-in-out; }
           .animate-float2 { animation: float2 9s infinite ease-in-out; }
           .animate-float3 { animation: float3 10s infinite ease-in-out; }
           .animate-float4 { animation: float4 11s infinite ease-in-out; }
           .animate-float5 { animation: float5 12s infinite ease-in-out; }
       </style>
   </div>
