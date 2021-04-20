import Article from "./Article/Article";
import Section from "./Section/Section";
import missedArticlesData from "./_data/missed-articles.json";
import yourArticlesData from "./_data/your-articles.json";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

function App() {
  return (
    <Box pl={15} pr={15} pt={10} className="App">
      <Section title="For you">
        <Grid container spacing={2}>
          {yourArticlesData.map((article) => (
            <Grid item xs={6}>
              <Article flexDirection="row" {...article} />
            </Grid>
          ))}
        </Grid>
      </Section>
      <Section title="In case you missed it">
        <Grid container spacing={2}>
          {missedArticlesData.map((article) => (
            <Grid item xs={4}>
              <Article flexDirection="column" {...article} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
}

export default App;
