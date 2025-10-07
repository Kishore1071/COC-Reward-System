from rest_framework.serializers import ModelSerializer
from .models import *


class ChestSerializer(ModelSerializer):

    class Meta:

        model = Chest
        fields = '__all__'

class RewardCategorySerializer(ModelSerializer):

    class Meta:

        model = RewardCategory
        fields = '__all__'

class RewardItemsSerializer(ModelSerializer):

    class Meta:

        model = RewardItems
        fields = '__all__'

class ChestRecordsSerializer(ModelSerializer):

    class Meta:

        model = ChestRecords
        fields = '__all__'

class ChestRecordsData_Serializer(ModelSerializer):

    chest = ChestSerializer()
    reward_category_reference = RewardCategorySerializer()
    reward_items_reference = RewardItemsSerializer()

    class Meta:

        model = ChestRecords
        fields = '__all__'