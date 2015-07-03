'use strict';

var LightningVisualization = require('lightning-visualization');

/* 
// Uncomment this code to require an optional stylesheet
var fs = require('fs');
var styles = fs.readFileSync(__dirname + '/test.css');
*/

/*
 * Extend the base visualization object
 */
var Visualization = LightningVisualization.extend({

    init: function() {
        this.render();
    },

    /*styles: styles,*/ // optionally pass a string of CSS styles 

    formatData: function(data) {
        return data;
    },

    updateData: function(formattedData) {
        this.data = formattedData;
        // TODO: re-render the visualization
    },

    appendData: function(formattedData) {        
        // TODO: update this.data to include the newly
        //       added formattedData

        // TODO: re-render the visualization
    }

});


module.exports = Visualization;
