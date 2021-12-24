import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../Api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = {videos: [] , selectedVideo : null};

    onTermSubmit = async (term) =>{
        // console.log(term);
        const response = await youtube.get('/search' , {
            params:{
                q: term
            }
        })
        // console.log(response.data.items); 

        this.setState ({videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = video =>{
        // console.log('From the App!' , video);
        this.setState({selectedVideo : video });
    }

    componentDidMount(){
        this.onTermSubmit('buildings');
    }
    
    render(){
        return(
            <div className='ui container'>
            <SearchBar onSubmitting= {this.onTermSubmit} />
            {/* I have {this.state.videos.length} videos. */}
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList onVideoSelect= {this.onVideoSelect} 
                        videos={this.state.videos} 
                        />
                    </div>
                </div>   
            </div>     
            </div>
        )
    }
}
export default App;