"use client";

import { useState } from "react";

const series = [32, 46, 39, 62, 55, 78, 72, 91, 84, 105, 118, 111];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function ChartPreview({ type = "line", compact = false }: { type?: string; compact?: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const width = 640;
  const height = compact ? 210 : 330;
  const plotTop = 35;
  const plotBottom = height - 45;
  const points = series.map((value, index) => ({
    x: 45 + index * ((width - 80) / (series.length - 1)),
    y: plotBottom - (value / 130) * (plotBottom - plotTop),
    value,
  }));
  const linePath = points.map((point, i) => `${i ? "L" : "M"} ${point.x} ${point.y}`).join(" ");

  if (["pie", "donut"].includes(type)) {
    const segments = [
      { color: "var(--accent)", dash: "30 70", offset: 25, label: "Organic", value: "38%" },
      { color: "var(--chart-2)", dash: "24 76", offset: 95, label: "Paid", value: "27%" },
      { color: "var(--chart-3)", dash: "18 82", offset: 71, label: "Referral", value: "21%" },
      { color: "var(--chart-4)", dash: "12 88", offset: 53, label: "Social", value: "14%" },
    ];
    return (
      <div className="donut-layout">
        <svg className="donut-chart" viewBox="0 0 200 200" role="img" aria-label="Revenue by channel">
          <circle cx="100" cy="100" r="65" fill="none" stroke="var(--surface-3)" strokeWidth={type === "pie" ? 65 : 25} />
          {segments.map((segment) => (
            <circle key={segment.label} cx="100" cy="100" r="65" fill="none" stroke={segment.color}
              strokeWidth={type === "pie" ? 65 : 25} pathLength="100" strokeDasharray={segment.dash}
              strokeDashoffset={segment.offset} transform="rotate(-90 100 100)" />
          ))}
          {type === "donut" && <><text x="100" y="95" textAnchor="middle" className="svg-big">$284k</text><text x="100" y="116" textAnchor="middle" className="svg-small">REVENUE</text></>}
        </svg>
        <div className="chart-legend">
          {segments.map((item) => <div key={item.label}><i style={{ background: item.color }} /><span>{item.label}</span><strong>{item.value}</strong></div>)}
        </div>
      </div>
    );
  }

  if (type === "heatmap") {
    return (
      <div className="heatmap-wrap">
        <div className="heatmap-labels">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <span key={day}>{day}</span>)}</div>
        <div className="heatmap-grid">
          {Array.from({ length: 84 }).map((_, i) => <i key={i} data-level={(i * 7 + i % 5) % 5} title={`${12 + (i * 9) % 80} events`} />)}
        </div>
        <div className="heatmap-scale"><span>Less</span>{[0, 1, 2, 3, 4].map((i) => <i key={i} data-level={i} />)}<span>More</span></div>
      </div>
    );
  }

  if (type === "sankey" || type === "funnel") {
    return (
      <svg className="chart-svg" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${type} conversion flow`}>
        {type === "sankey" ? (
          <>
            {[
              ["Traffic", 50, 65, 90], ["Landing", 240, 105, 72], ["Product", 400, 68, 58],
              ["Trial", 400, 205, 38], ["Subscription", 555, 110, 44],
            ].map(([label, x, y, h]) => <g key={String(label)}><rect x={Number(x)} y={Number(y)} width="12" height={Number(h)} rx="2" className="sankey-node" /><text x={Number(x)} y={Number(y) - 9} className="svg-label">{label}</text></g>)}
            <path d="M62 72 C145 72 160 115 240 115 L240 168 C160 168 145 145 62 145Z" className="flow flow-a" />
            <path d="M252 115 C320 115 330 75 400 75 L400 122 C330 122 320 168 252 168Z" className="flow flow-b" />
            <path d="M252 170 C320 170 340 215 400 215 L400 246 C340 246 320 185 252 185Z" className="flow flow-c" />
            <path d="M412 76 C475 76 490 120 555 120 L555 153 C490 153 475 118 412 118Z" className="flow flow-a" />
            <path d="M412 215 C485 215 500 155 555 145 L555 160 C500 170 485 242 412 242Z" className="flow flow-c" />
          </>
        ) : (
          <>
            {[["Visitors", 520, 0], ["Product views", 420, 1], ["Trials", 310, 2], ["Activated", 220, 3], ["Paid", 140, 4]].map(([label, w, i]) => {
              const widthValue = Number(w);
              const y = 30 + Number(i) * 55;
              return <g key={String(label)}><path d={`M${(640-widthValue)/2} ${y} H${(640+widthValue)/2} L${(640+widthValue-45)/2} ${y+42} H${(640-widthValue+45)/2} Z`} className={`funnel f-${i}`} /><text x="320" y={y+26} textAnchor="middle" className="funnel-label">{label}</text></g>;
            })}
          </>
        )}
      </svg>
    );
  }

  if (type === "treemap") {
    return <div className="treemap">
      <div className="tree-a"><strong>Product</strong><span>42%</span></div>
      <div className="tree-stack"><div className="tree-b"><strong>Marketing</strong><span>24%</span></div><div className="tree-row"><div><strong>Sales</strong><span>18%</span></div><div><strong>Ops</strong><span>16%</span></div></div></div>
    </div>;
  }

  if (type === "gauge") {
    return <div className="gauge"><svg viewBox="0 0 300 175"><path d="M35 150 A115 115 0 0 1 265 150" className="gauge-track" /><path d="M35 150 A115 115 0 0 1 235 72" className="gauge-value" pathLength="100" strokeDasharray="78 100" /><text x="150" y="130" textAnchor="middle" className="gauge-number">84.2</text><text x="150" y="153" textAnchor="middle" className="svg-small">PERFORMANCE</text></svg></div>;
  }

  if (type === "network") {
    const nodes = [[320,150],[150,80],[490,75],[120,240],[515,245],[245,260],[400,265],[235,55],[420,145]];
    return <svg className="chart-svg network" viewBox={`0 0 ${width} ${height}`}>
      {nodes.slice(1).map((node, i) => <line key={i} x1="320" y1="150" x2={node[0]} y2={node[1]} />)}
      {nodes.map((node, i) => <g key={i}><circle cx={node[0]} cy={node[1]} r={i === 0 ? 26 : 12 + (i%3)*3} /><text x={node[0]} y={node[1]+4} textAnchor="middle">{i === 0 ? "API" : i+1}</text></g>)}
    </svg>;
  }

  if (type === "candlestick") {
    return <svg className="chart-svg" viewBox={`0 0 ${width} ${height}`}>
      <ChartGrid width={width} height={height} />
      {series.map((value, i) => { const x=55+i*46; const open=plotBottom-(value/130)*220; const up=i%3!==0; return <g key={i} className={up ? "candle-up":"candle-down"}><line x1={x} y1={open-28} x2={x} y2={open+35}/><rect x={x-7} y={up?open:open-12} width="14" height="24"/></g>; })}
    </svg>;
  }

  if (type === "radar") {
    return <svg className="chart-svg radar" viewBox={`0 0 ${width} ${height}`}>
      {[1,.75,.5,.25].map((scale) => <polygon key={scale} points={radarPoints(320, height/2, 125*scale, 6)} />)}
      <polygon className="radar-value" points="320,52 420,112 395,235 320,270 225,222 244,105" />
      {["Speed","A11y","DX","Scale","Quality","Adoption"].map((label,i)=>{const [x,y]=polar(320,height/2,150,i,6);return <text key={label} x={x} y={y} textAnchor="middle">{label}</text>})}
    </svg>;
  }

  const isBar = ["bar", "histogram", "waterfall"].includes(type);
  const isScatter = ["scatter", "bubble"].includes(type);
  const isArea = type === "area";
  return (
    <svg className="chart-svg" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${type} chart`}>
      <ChartGrid width={width} height={height} />
      {isBar && points.map((point, i) => <rect key={i} x={point.x - 12} y={point.y} width="24" height={plotBottom-point.y} rx="2" className={`chart-bar bar-${i%3}`} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} />)}
      {isScatter && points.map((point,i)=><circle key={i} cx={point.x} cy={point.y+(i%3)*18-10} r={type==="bubble" ? 6+(i%4)*3 : 5} className={`scatter scatter-${i%3}`} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} />)}
      {!isBar && !isScatter && <>
        {isArea && <path d={`${linePath} L ${points.at(-1)?.x} ${plotBottom} L ${points[0].x} ${plotBottom} Z`} className="area-fill" />}
        <path d={linePath} className="chart-line" />
        {points.map((point, i) => <circle key={i} cx={point.x} cy={point.y} r="4" className="chart-point" onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} />)}
      </>}
      {labels.filter((_,i)=>i%2===0).map((label,i)=><text key={label} x={points[i*2].x} y={height-15} textAnchor="middle" className="axis-label">{label}</text>)}
      {hovered !== null && <g className="chart-tooltip"><rect x={Math.min(points[hovered].x-45,540)} y={Math.max(points[hovered].y-58,8)} width="90" height="40" rx="3"/><text x={Math.min(points[hovered].x,585)} y={Math.max(points[hovered].y-34,32)} textAnchor="middle">${series[hovered]}k</text></g>}
    </svg>
  );
}

function ChartGrid({ width, height }: { width: number; height: number }) {
  return <>{[0,1,2,3,4].map((i)=><g key={i}><line x1="45" y1={35+i*((height-80)/4)} x2={width-25} y2={35+i*((height-80)/4)} className="grid-line"/><text x="36" y={39+i*((height-80)/4)} textAnchor="end" className="axis-label">{120-i*30}</text></g>)}</>;
}

function polar(cx:number,cy:number,r:number,index:number,total:number):[number,number] {
  const angle=-Math.PI/2+(index/total)*Math.PI*2;
  return [cx+Math.cos(angle)*r,cy+Math.sin(angle)*r];
}
function radarPoints(cx:number,cy:number,r:number,total:number) {
  return Array.from({length:total},(_,i)=>polar(cx,cy,r,i,total).join(",")).join(" ");
}
