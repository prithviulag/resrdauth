function drawDependencyWheel(e){if(function(e){for(var t=0;t<e.length;t++)for(var n=e[t],r=0;r<n.length;r++)if(0!=n[r])return!1;return!0}(e))d3.select("body").html('<text class="default-text-color">No cross dependency between packages</text>');else{var t=1e3,n=1e3,r=Math.min(t,n)/2-200,a=r-24,d=d3.svg.arc().innerRadius(a).outerRadius(r),c=d3.layout.chord().padding(.04).sortSubgroups(d3.descending).sortChords(d3.ascending),o=d3.svg.chord().radius(a),s=d3.select("body").append("svg").attr("width",t).attr("height",n).append("g").attr("id","circle").attr("transform","translate(500,500)");s.append("circle").attr("r",r),d3.select(window).on("click",(function(){i.classed("fade",(function(e){return!1}))}));c.matrix(e);var u=s.selectAll(".group").data(c.groups).enter().append("g").attr("class","group").on("mouseover",(function(e,t){i.classed("fade",(function(e){return e.source.index!=t&&e.target.index!=t}))}));u.append("title").text((function(e,t){return packages[t].name+": "+Math.round(e.value)+" out couplings"}));u.append("path").attr("id",(function(e,t){return"group"+t})).attr("d",d).style("fill",(function(e,t){return packages[t].color})),u.append("text").attr("dy",".35em").attr("text-anchor",(function(e){return(e.startAngle+e.endAngle)/2>Math.PI?"end":null})).attr("transform",(function(e){var t=(e.startAngle+e.endAngle)/2;return"rotate("+(180*t/Math.PI-90)+")translate("+(r+5)+")"+(t>Math.PI?"rotate(180)":"")})).text((function(e,t){return function(e){0;var t=e.name,n=t.indexOf(".");return t.substring(n+1);var r=t.indexOf(".",n+1);0;var a=t.indexOf(".",r+1);0;return t.substring(a+1)}(packages[t])}));var i=s.selectAll(".chord").data(c.chords).enter().append("path").attr("class","chord").style("fill",(function(e){return packages[e.source.index].color})).attr("d",o);i.append("title").text((function(e){return packages[e.source.index].name+" > "+packages[e.target.index].name+": "+e.source.value+"\n"+packages[e.target.index].name+" > "+packages[e.source.index].name+": "+e.target.value}))}}drawDependencyWheel(matrix);
