import {Grid} from "semantic-ui-react";
import ActivityList from "./ActivityLIst";

import {useStore} from "../../../app/stores/store";
import {observer} from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {useEffect} from "react";
import ActivityFilters from "./ActivityFIlters";

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities]);

    if (activityStore.loadingInitial)
        return <LoadingComponent content="Loading activities..."/>;

    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList/>
            </Grid.Column>
            <Grid.Column width="6">
                <ActivityFilters/>
            </Grid.Column>
        </Grid>
    );
});
