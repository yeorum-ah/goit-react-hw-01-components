import { StatsWrap, StatsTitle, StatsList, StatListItem } from "./statistics-styled";
export const Statistics = ({stats}) => {
    return <>{
        <StatsWrap className ="statistics">
            <StatsTitle className ="title">Upload Stats</StatsTitle>
            <StatsList className="stat-list">
     {stats.map(({id, label, percentage})=>{
        return <StatListItem className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatListItem>
    })}
    
       </StatsList>
        </StatsWrap>
    }
    </>
}