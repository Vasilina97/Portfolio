import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      projects: [
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
          category: "Business Cards"
        },
        // ... все остальные проекты из задания
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
          category: "Flayers"
        }
      ]
    };
  }

  filters = ["All", "Websites", "Flayers", "Business Cards"];

  onSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  getFilteredProjects() {
    if (this.state.selected === 'All') {
      return this.state.projects;
    }
    return this.state.projects.filter(
      (project) => project.category === this.state.selected
    );
  }

  render() {
    return (
      <div className="portfolio">
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.getFilteredProjects()} />
      </div>
    );
  }
}

export default Portfolio;