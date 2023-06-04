import  { Container, Title } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/Groupcard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty/inde';

const Groups = () => {

    const [groups, setGroups] = useState<string[]>([ ]);

    return (
    <Container>
        <Header />
        <Highlight title="Turmas" subTitle="Jogue com a sua turma" />
        <FlatList 
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <GroupCard title={item} />
            )}
            contentContainerStyle={groups.length === 0 && {flex: 1}}
           ListEmptyComponent={()=> <ListEmpty message="Que Tal cadastrar uma turma?" />}
        ></FlatList>
    </Container>
    );
    }

export default Groups;