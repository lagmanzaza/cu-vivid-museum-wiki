// @flow

import ResultItem from './ResultItem';

export default ({ results, searchWords }: { results: [], searchWords: string }) => (
    <div className="container">
        <div className="listWrap">
            {
                results.map(
                    (item, i) =>
                        <ResultItem searchWords={searchWords} {...item} key={i} />,
                )
            }
        </div>
        <style jsx>
            {
                `
                    .container {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .listWrap {
                        max-width: 1024px;
                        display: flex;
                        flex-wrap: wrap;
                    }
                `
            }
        </style>
    </div>
);
