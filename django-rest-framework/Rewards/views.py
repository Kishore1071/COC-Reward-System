from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

class ChestView(APIView):

    def get(self, request):

        return Response(ChestSerializer(Chest.objects.all(), many=True).data)
    
class RewardCategoryView(APIView):

    def get(self, request):

        return Response(RewardCategorySerializer(RewardCategory.objects.all(), many=True).data)
    
class RewardItemsView(APIView):

    def get(self, request):

        return Response(RewardItemsSerializer(RewardItems.objects.all(), many=True).data)
    
class ChestRecordsView(APIView):

    def get(self, request):

        return Response(ChestRecordsData_Serializer(ChestRecords.objects.all(), many=True).data)
    
    def post(self, request):

        print(request.data)

        new_record = ChestRecords(chest_id=request.data.get('chest_id'),reward_category_reference_id=request.data.get('reward_category_reference_id'),reward_items_reference_id=request.data.get('reward_items_reference_id'),quantity=request.data.get('quantity'), extra_note=request.data.get('notes'))

        new_record.save()

        return Response("Success")

    def delete(self, request, id):

        record = ChestRecords.objects.get(id=id)
        record.delete()

        return Response("Deleted Successfully")