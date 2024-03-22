'use client'
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3"
import dayjs from "dayjs";
import 'dayjs/locale/es'

dayjs.locale("es");

const HomeGerencia = () => {
  const [data, setData] = useState([4300000, 2800000, 3650000, 5740000, 2670000, 2500000, 3200000]);
  const svgRef = useRef<SVGSVGElement | null>(null);


  useEffect(() => {
    // setting up svg
    const w = 560;
    const h = 320;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");

    // setting the scaleing
    // xscales
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    //yscales
    const yScale = d3.scaleLinear().domain([0, 6000000]).range([h, 0]);

    //  Setup functions to draw Lines ---------------//
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d, i) => yScale(d));

    // setting the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(1 + data.length)
      .tickFormat((i) => dayjs().month(i.valueOf()).format("MMM \"YY"));

    const yAxis = d3.axisLeft(yScale).ticks(7)
      .tickFormat(i => i.valueOf() / 1000000 + "M");

    svg.append("g")
      .call(xAxis)
      .attr("stroke-width", 3)
      .attr("transform", `translate(0,${h})`)
      .attr("color", "lavender")
      .selectAll("text")
      .style("font", "16px sans")
      .attr("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("color", "gray")
      .attr("transform", "rotate(-65)");

    svg.append("g").call(yAxis)
      .attr("color", "lavender")
      .attr("stroke-width", 3)
      .selectAll("text")
      .style("font", "16px sans")
      .attr("color", "gray");

    // setting up the data for the svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", ".line")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "lavender")
      .attr("stroke-width", 8);

    svg.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 8)
      .attr("cx", function (d, i) {
        return xScale(i);
      })
      .attr("cy", function (d) {
        return yScale(d);
      })
      .attr("fill", "white");

    var arc = d3.arc()
      .outerRadius(8)
      .innerRadius(12)
      .startAngle(0)
      // Use of cornerRadius Function 
      .cornerRadius(20)
      .endAngle(Math.PI * 2);

    svg.selectAll(".dot")
      .data(data)
      .enter()
      .append("path")
      .attr("class", "arc")
      .attr("d", d => arc(d))
      .attr("transform", (d, i) => "translate(" + xScale(i) + "," + yScale(d) + ")")
      .attr("fill", "lavender");

    var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "4px")
      .style("padding", "6px")
      .style("color", "white")
      .style("position", "absolute")
      .style("left", 0)
      .style("top", 0)
      .style("opacity", 0);

    svg.selectAll("circle").on("mouseover", function (event, d) {
      console.log("D", d);
      tooltip.html("<div>CLP $<b>" + Number(d).toLocaleString() + "</b></div>");
      const [x, y] = d3.pointer(event);
      console.log("X, Y", x, y);
      tooltip.transition().duration(200).style("opacity", .9).style("left", (x + w) + "px").style("top", ((y - 82) + h / 2) + "px");
    })
      .on("mouseout", function (d) {
        tooltip.transition().duration(500).style("opacity", 0);
      });
  }, [data]);


  return (
    <div className="w-full my-20">
      <svg ref={svgRef} style={{ margin: "auto", display: "block" }}></svg>
    </div>
  );
}

export default HomeGerencia;