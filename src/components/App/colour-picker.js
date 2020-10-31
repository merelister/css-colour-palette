import React from 'react';
import { SketchPicker } from 'react-color';

class ColourPicker extends React.Component {

    state = {
        background: '#fff', //default colour. this will be the colour from css file
        displayColorPicker: false,
    };
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
    
      handleClose = () => {
        this.setState({ displayColorPicker: false })
      };
    

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex}); //update the colour when done picking
    };
    handleChange(color) {
        // update colour whenever change made (eg when you drag to select a colour)
        this.setState({ background: color.hex});
    }
    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
          }
          const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          }
        return (
            <div>
                <button onClick={ this.handleClick }>Pick Color</button>
       { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <SketchPicker />
        </div> : null }
      </div>
        ) 
    }
}

export default ColourPicker
