import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  BACKGROUND_COLOR,
  FONT_FAMILY_BOLD,
  FONT_SIZE_SMALL,
  PRIMARY,
} from '../../../../../../identity';

export enum ExhibitionMode {
  ONE = 'one',
  THREE = 'three',
  HORIZONTAL = 'horizontal',
}

type Props = {
  section: {
    name: string;
    id: string;
    loaded: boolean;
    exhibitionMode: ExhibitionMode;
    isHided: boolean;
    color: string;
  };
  inOffer?: boolean;
  onPress?: (section: {name: string; id: string}) => void;
};

const SectionName: React.FC<Props> = ({
  section,
  onPress = () => {},
  inOffer = false,
}) => {
  const handleChangeSectionView = useCallback(
    () => {
      /*    dispatch(StoreActions.updateSectionView(section)); */
    },
    [
      /* section */
    ],
  );

  const renderIcon = useMemo(() => {
    switch (section.exhibitionMode) {
      case ExhibitionMode.ONE:
        return <Icon name="view-module" />;
      case ExhibitionMode.THREE:
        return <Icon name="view-comfy" />;
      default:
        return <Icon name="view-headline" />;
    }
  }, [section]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(section)}>
        <View style={styles.sectionColorContainer} />
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>{section.name.toUpperCase()}</Text>
          {section.isHided ? (
            <Icon name="caret-right" />
          ) : (
            <Icon name="caret-down" />
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.sectionIconsContainer}>
        {!section.isHided && !inOffer && (
          <TouchableOpacity
            style={styles.btOrderSection}
            onPress={handleChangeSectionView}>
            {renderIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default SectionName;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    justifyContent: 'space-between',
    backgroundColor: BACKGROUND_COLOR,
    shadow: 10,
    elevation: 2,
  },
  touchableOpacity: {
    opacity: 0.6,
    flex: 1,
    flexDirection: 'row',
  },
  sectionColorContainer: {
    width: 10,
    backgroundColor: '#8bff9e',
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: FONT_SIZE_SMALL,
    marginLeft: 8,
    fontfamily: FONT_FAMILY_BOLD,
  },
  sectionIconsContainer: {
    flexDdirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  btOrderSection: {
    pacity: 0.6,
    height: 40,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
