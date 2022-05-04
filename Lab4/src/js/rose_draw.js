const svgns = "http://www.w3.org/2000/svg";
let winds = [["E", 10],["SE", 10],["N", 10],["E", 10],["NW", 10],["W", 10],["NE", 10],["SW", 10],["S", 10]]

// targeting the svg itself
const svg = document.querySelector("svg");
draw()
function draw()
{
    draw_polygon()
    draw_system()
}

function draw_polygon()
{
    let newPolygon = document.createElementNS(svgns, "polygon");
    newPolygon.setAttribute("style","fill:lime; stroke:purple; ")
    let points = convert_winds_array(winds)
    for (value of points) {
        var point = svg.createSVGPoint();
        point.x = value[0];
        point.y = value[1];
        newPolygon.points.appendItem(point);
    }
    svg.appendChild(newPolygon);
}

function convert_winds_array(winds_array)
{
    let Cx =300, Cy = 300;
    let dict = new Map([["N", 0], ["NE", 0], ["E", 0], ["SE", 0], ["S", 0], ["SW", 0], ["W", 0], ["NW", 0]]);
    for(let i of winds_array)
    {
        dict.set(i[0], dict.get(i[0]) + i[1] * 5)
    }

    let points = []
    for(let i of dict)
    {
        switch(i[0]){
            case "N" :
                points.push([Cx, Cy - dict.get(i[0])])
                break;
            case "NE" :
                points.push([Cx + dict.get(i[0]) / Math.sqrt(2), Cy - dict.get(i[0]) / Math.sqrt(2)])
                break;
            case "E" :
                points.push([Cx + dict.get(i[0]), Cy])
                break;
            case "SE" :
                points.push([Cx + dict.get(i[0]) / Math.sqrt(2), Cy + dict.get(i[0]) / Math.sqrt(2)])
                break;
            case "S" :
                points.push([Cx, Cy + dict.get(i[0])])
                break;
            case "SW" :
                points.push([Cx - dict.get(i[0]) / Math.sqrt(2), Cy + dict.get(i[0]) / Math.sqrt(2)])
                break;
            case "W" :
                points.push([Cx - dict.get(i[0]), Cy])
                break;
            case "NW" :
                points.push([Cx - dict.get(i[0]) / Math.sqrt(2), Cy - dict.get(i[0]) / Math.sqrt(2)])
                break;
            default:
                console.log("Unknown");
                break;
        }
    }

    for(let i of dict)
    {
        console.log(i[0], i[1])
    }
    return points
}

function draw_system()
{
    let newline = document.createElementNS(svgns, "line");
    newline.setAttribute("x1","100")
    newline.setAttribute("y1","300")
    newline.setAttribute("x2","500")
    newline.setAttribute("y2","300")
    newline.setAttribute("style","stroke:rgb(0, 0, 0); stroke-width:2")
    svg.appendChild(newline);

    newline = document.createElementNS(svgns, "line");
    newline.setAttribute("x1","300")
    newline.setAttribute("y1","100")
    newline.setAttribute("x2","300")
    newline.setAttribute("y2","500")
    newline.setAttribute("style","stroke:rgb(0, 0, 0); stroke-width:2")
    svg.appendChild(newline);

    newline = document.createElementNS(svgns, "line");
    newline.setAttribute("x1","100")
    newline.setAttribute("y1","100")
    newline.setAttribute("x2","500")
    newline.setAttribute("y2","500")
    newline.setAttribute("style","stroke:rgb(0, 0, 0); stroke-width:2")
    svg.appendChild(newline);

    newline = document.createElementNS(svgns, "line");
    newline.setAttribute("x1","500")
    newline.setAttribute("y1","100")
    newline.setAttribute("x2","100")
    newline.setAttribute("y2","500")
    newline.setAttribute("style","stroke:rgb(0, 0, 0); stroke-width:2")
    svg.appendChild(newline);

    let text = document.createElementNS(svgns, "text");
    text.setAttribute("x","90");
    text.setAttribute("y","90");
    text.setAttribute("text-anchor","middle");
    text.textContent = "NW";
    svg.appendChild(text);

    text = document.createElementNS(svgns, "text");
    text.setAttribute("x","300");
    text.setAttribute("y","90");
    text.setAttribute("text-anchor","middle");
    text.setAttribute("font-size","24");
    text.setAttribute("fill","red");
    text.textContent = "N";
    svg.appendChild(text);

    text = document.createElementNS(svgns, "text");
    text.setAttribute("x","510");
    text.setAttribute("y","90");
    text.setAttribute("text-anchor","middle");
    text.textContent = "NE";
    svg.appendChild(text);

    text = document.createElementNS(svgns, "text");
    text.setAttribute("x","510");
    text.setAttribute("y","305");
    text.setAttribute("text-anchor","middle");
    text.setAttribute("font-size","24");
    text.setAttribute("fill","red");
    text.textContent = "E";
    svg.appendChild(text);

    text = document.createElementNS(svgns, "text");
    text.setAttribute("x","510");
    text.setAttribute("y","515");
    text.setAttribute("text-anchor","middle");
    text.textContent = "SE";
    svg.appendChild(text);

    text = document.createElementNS(svgns, "text");
    text.setAttribute("x","300");
    text.setAttribute("y","520");
    text.setAttribute("text-anchor","middle");
    text.setAttribute("font-size","24");
    text.setAttribute("fill","red");
    text.textContent = "S";
    svg.appendChild(text);

    text = document.createElementNS(svgns, "text");
    text.setAttribute("x","90");
    text.setAttribute("y","515");
    text.setAttribute("text-anchor","middle");
    text.textContent = "SW";
    svg.appendChild(text);

    text = document.createElementNS(svgns, "text");
    text.setAttribute("x","90");
    text.setAttribute("y","305");
    text.setAttribute("text-anchor","middle");
    text.setAttribute("font-size","24");
    text.setAttribute("fill","red");
    text.textContent = "W";
    svg.appendChild(text);
}