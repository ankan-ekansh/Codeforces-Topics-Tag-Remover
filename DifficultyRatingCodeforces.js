// ==UserScript==
// @name         Diffuculty Rating Codeforces
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  only have rating tag for unsolved problem, else show all tags
// @author       Ankan Ekansh
// @include      https://codeforces.com/problemset/*
// @include      https://codeforces.com/contest/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let verdictTableElements = document.getElementsByClassName('rtable smaller');
    let tagElements = document.getElementsByClassName('roundbox');
    let isAccepted = false;
    let verdictTableElementsSize = verdictTableElements.length;
    while(verdictTableElementsSize--){
        let verdictElementsRow = document.getElementsByTagName('tr');
        for(let i=0;i<verdictElementsRow.length;i++){
            let verdictElementsRowChildren = verdictElementsRow[i].children;
            for(let j=0;j<verdictElementsRowChildren.length;j++){
                let verdictItems = verdictElementsRowChildren[j].getElementsByClassName('verdict-accepted');
                for(let k=0;k<verdictItems.length; k++){
                    if(verdictItems[k].classList.value == 'verdict-accepted'){
                        console.log('Verdict accepted found');
                        isAccepted = true;
                        break;
                    }
                }
                if(isAccepted == true){
                    break;
                }
            }
            if(isAccepted == true){
                break;
            }
        }
    }
    if(isAccepted == false){
        console.log('Since verdict is not accepted tags will be removed');
        let tagElementsSize = tagElements.length;
        while(tagElementsSize--){
            for(let i=0; i<tagElements[tagElementsSize].children.length; i++){
                if(tagElements[tagElementsSize].children[i].classList.contains('tag-box') && tagElements[tagElementsSize].children[i].getAttribute('title') != 'Difficulty'){
                    tagElements[tagElementsSize].remove();
                    break;
                }
            }
        }
    }
    // Your code here...
})();