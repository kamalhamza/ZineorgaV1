import React, { Component } from "react";
import OrgChart from "@balkangraph/orgchart.js";

export default class extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
   
    OrgChart.templates.cool = Object.assign({}, OrgChart.templates.ana);
    //VENDEURSRouge
    OrgChart.templates.rouge = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.rouge.defs =
      '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="cool-shadow"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';
      OrgChart.templates.rouge.size = [310, 190];
    OrgChart.templates.rouge.node =
      '<rect filter="url(#cool-shadow)"  x="0" y="0" height="190" width="310" fill="#E12525" stroke-width="1" stroke="#D0D9E8" rx="10" ry="10"></rect><rect fill="#ffffff" x="100" y="10" width="200" height="100" rx="10" ry="10" filter="url(#cool-shadow)"></rect><rect stroke="#eeeeee" stroke-width="1" x="10" y="120" width="220" fill="#ffffff" rx="10" ry="10" height="60"></rect><rect stroke="#eeeeee" stroke-width="1" x="240" y="120" width="60" fill="#ffffff" rx="10" ry="10" height="60"></rect><text  style="font-size: 11px;" fill="#afafaf" x="110" y="60">PERFORMANCE</text>' +
      '<image  xlink:href="https://cdn.balkan.app/shared/speedometer.svg" x="110" y="65" width="32" height="32"></image>';
    OrgChart.templates.rouge.img =
      '<clipPath id="{randId}"><rect  fill="#ffffff" stroke="#039BE5" stroke-width="5" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="10"  width="80" height="100"></image><rect fill="none" stroke="#E12525" stroke-width="2" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect>';
    OrgChart.templates.rouge.name =
      '<text  style="font-size: 18px;" fill="#18A4BC" x="110" y="30">{val}</text>';
    OrgChart.templates.rouge.title =
      '<text  style="font-size: 14px; font-weight: 500" fill="#18A4BC" x="20" y="145">{val}</text>';
    OrgChart.templates.rouge.title2 =
      '<text style="font-size: 14px;" fill="#afafaf" x="20" y="165">{val}</text>';
    OrgChart.templates.rouge.points =
      '<text style="font-size: 24px;" fill="#18A4BC" x="270" y="165" text-anchor="middle">{val}</text>';
    OrgChart.templates.rouge.performance =
      '<text style="font-size: 24px;" fill="#18A4BC" x="150" y="90" >{val}</text>';
        //VENDEURSjaune
    OrgChart.templates.jaune = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.jaune.defs =
      '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="cool-shadow"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';
      OrgChart.templates.jaune.size = [310, 190];
    OrgChart.templates.jaune.node =
      '<rect filter="url(#cool-shadow)"  x="0" y="0" height="190" width="310" fill="#E6C233" stroke-width="1" stroke="#D0D9E8" rx="10" ry="10"></rect><rect fill="#ffffff" x="100" y="10" width="200" height="100" rx="10" ry="10" filter="url(#cool-shadow)"></rect><rect stroke="#eeeeee" stroke-width="1" x="10" y="120" width="220" fill="#ffffff" rx="10" ry="10" height="60"></rect><rect stroke="#eeeeee" stroke-width="1" x="240" y="120" width="60" fill="#ffffff" rx="10" ry="10" height="60"></rect><text  style="font-size: 11px;" fill="#afafaf" x="110" y="60">PERFORMANCE</text>' +
      '<image  xlink:href="https://cdn.balkan.app/shared/speedometer.svg" x="110" y="65" width="32" height="32"></image>';
    OrgChart.templates.jaune.img =
      '<clipPath id="{randId}"><rect  fill="#ffffff" stroke="#039BE5" stroke-width="5" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="10"  width="80" height="100"></image><rect fill="none" stroke="#E12525" stroke-width="2" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect>';
    OrgChart.templates.jaune.name =
      '<text  style="font-size: 18px;" fill="#18A4BC" x="110" y="30">{val}</text>';
    OrgChart.templates.jaune.title =
      '<text  style="font-size: 14px; font-weight: 500" fill="#18A4BC" x="20" y="145">{val}</text>';
    OrgChart.templates.jaune.title2 =
      '<text style="font-size: 14px;" fill="#afafaf" x="20" y="165">{val}</text>';
    OrgChart.templates.jaune.points =
      '<text style="font-size: 24px;" fill="#18A4BC" x="270" y="165" text-anchor="middle">{val}</text>';
    OrgChart.templates.jaune.performance =
      '<text style="font-size: 24px;" fill="#18A4BC" x="150" y="90" >{val}</text>';
        //VENDEURSvert
    OrgChart.templates.vert = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.vert.defs =
      '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="cool-shadow"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';
      OrgChart.templates.vert.size = [310, 190];
    OrgChart.templates.vert.node =
      '<rect filter="url(#cool-shadow)"  x="0" y="0" height="190" width="310" fill="#008037" stroke-width="1" stroke="#D0D9E8" rx="10" ry="10"></rect><rect fill="#ffffff" x="100" y="10" width="200" height="100" rx="10" ry="10" filter="url(#cool-shadow)"></rect><rect stroke="#eeeeee" stroke-width="1" x="10" y="120" width="220" fill="#ffffff" rx="10" ry="10" height="60"></rect><rect stroke="#eeeeee" stroke-width="1" x="240" y="120" width="60" fill="#ffffff" rx="10" ry="10" height="60"></rect><text  style="font-size: 11px;" fill="#afafaf" x="110" y="60">PERFORMANCE</text>' +
      '<image  xlink:href="https://cdn.balkan.app/shared/speedometer.svg" x="110" y="65" width="32" height="32"></image>';
    OrgChart.templates.vert.img =
      '<clipPath id="{randId}"><rect  fill="#ffffff" stroke="#039BE5" stroke-width="5" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="10"  width="80" height="100"></image><rect fill="none" stroke="#E12525" stroke-width="2" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect>';
    OrgChart.templates.vert.name =
      '<text  style="font-size: 18px;" fill="#18A4BC" x="110" y="30">{val}</text>';
    OrgChart.templates.vert.title =
      '<text  style="font-size: 14px; font-weight: 500" fill="#18A4BC" x="20" y="145">{val}</text>';
    OrgChart.templates.vert.title2 =
      '<text style="font-size: 14px;" fill="#afafaf" x="20" y="165">{val}</text>';
    OrgChart.templates.vert.points =
      '<text style="font-size: 24px;" fill="#18A4BC" x="270" y="165" text-anchor="middle">{val}</text>';
    OrgChart.templates.vert.performance =
      '<text style="font-size: 24px;" fill="#18A4BC" x="150" y="90" >{val}</text>';
      
      
    //RESPONSABLE
    OrgChart.templates.cool.defs =
      '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="cool-shadow"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';
    OrgChart.templates.cool.size = [310, 190];
    OrgChart.templates.cool.node =
      '<rect filter="url(#cool-shadow)"  x="0" y="0" height="190" width="310" fill="#ffffff" stroke-width="1" stroke="#eeeeee" rx="10" ry="10"></rect><rect fill="#ffffff" x="100" y="10" width="200" height="100" rx="10" ry="10" filter="url(#cool-shadow)"></rect><rect stroke="#eeeeee" stroke-width="1" x="10" y="120" width="290" fill="#ffffff" rx="10" ry="10" height="60"></rect>' ;
    OrgChart.templates.cool.img =
      '<clipPath id="{randId}"><rect  fill="#ffffff" stroke="#039BE5" stroke-width="5" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="10"  width="80" height="100"></image><rect fill="none" stroke="#18A4BC" stroke-width="2" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect>';
    OrgChart.templates.cool.name =
      '<text  style="font-size: 18px;" fill="#18A4BC" x="115" y="40">{val}</text>';
    OrgChart.templates.cool.title =
      '<text  style="font-size: 14px; font-weight: 500" fill="#18A4BC" x="20" y="145">{val}</text>';
    OrgChart.templates.cool.title2 =
      '<text style="font-size: 14px;" fill="#afafaf" x="20" y="165">{val}</text>';
      OrgChart.templates.polina.title =
      '<text style="font-size: 20px; font-weight:500;" fill="#18A4BC" x="150" y="50" text-anchor="middle">{val}</text>';
      OrgChart.templates.polina.node = '<rect x="0" y="0" height="80" width="300" fill="#393E46" stroke-width="1" stroke="#18A4BC" rx="5" ry="5"></rect>' ;
     var btnMinimize = 
            '<svg fill="#aeaeae" x="498" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
               '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
               '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +     
            '</svg>';
        var btnMaximize = 
            '<svg fill="#aeaeae" x="198" y="47" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
                '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
                '<polygon points="194.565,370.589 322.237,242.5 194.565,114.411 173.317,135.589 279.88,242.5 173.317,349.411 	"/>' +
            '</svg>';
      OrgChart.templates.group.min = Object.assign({}, OrgChart.templates.group);
      OrgChart.templates.group.min.name = '<text width="230" text-overflow="multiline" style="font-size: 24px;" fill="#aeaeae" x="125" y="65" text-anchor="middle">{val}</text>';
      OrgChart.templates.group.minBtn = btnMinimize +
          '<rect data-btn-min="{val}" x="498" y="17" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
      OrgChart.templates.group.min.maxBtn = btnMaximize +
          '<rect data-btn-max="{val}" x="198" y="47" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
      OrgChart.templates.group.min.name = '<text width="230" text-overflow="multiline" style="font-size: 24px;" fill="#aeaeae" x="125" y="65" text-anchor="middle">{val}</text>';
      
    var chart = new OrgChart(this.divRef.current, { 
      mouseScrool: OrgChart.action.zoom,
      scaleInitial:0.67,
      
      

    
      
      nodes: this.props.nodes,
      collapse: {
        level: 1,
        allChildren: true
    },
   

      template: "cool",
      nodeBinding: {
        name: "name",
        title: "title",
        title2: "title2",
        points: "points",
        performance: "performance",
        reaobj:"Realisation",
        qualit:"Qaulitatif",
        encaissement:"Encaissement",
        impay:"Impayé",
        img: "img",
      },
      tags: {
        "entity": {
            template: "polina"
        },
        "vendeur": {
          template: "jaune"
      },
      "rouge": {
        template: "rouge"
    },
    "vert": {
      template: "vert"
  },
        "node-with-subtrees": {
          min: true,
          template: "group",
          subTreeConfig: {
          siblingSeparation: 3,
          columns: 2
      }
      }
        
      },
      
    }
    
    );
   
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
