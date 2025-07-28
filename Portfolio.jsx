class Portfolio extends React.Component {
  state = {
    selected: 'All',
    projects: [...], // данные из задания
    filters: ['All', 'Websites', 'Flayers', 'Business Cards']
  }

  onSelectFilter = (filter) => {
    this.setState({ selected: filter });
  }

  getFilteredProjects() {
    if (this.state.selected === 'All') {
      return this.state.projects;
    }
    return this.state.projects.filter(project => project.category === this.state.selected);
  }

  render() {
    return (
      <div>
        <Toolbar 
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.getFilteredProjects()} />
      </div>
    );
  }
}