from django.db import models


class Chest(models.Model):

    chest = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.chest
    
class RewardCategory(models.Model):

    reward_category = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.reward_category
    
class RewardItems(models.Model):

    reward_item = models.CharField(max_length=100, unique=True)
    reward_category_reference = models.ForeignKey(RewardCategory, related_name='reward_items', on_delete=models.CASCADE)

    def __str__(self):
        return self.reward_item
    

class ChestRecords(models.Model):

    chest = models.ForeignKey(Chest, null=True, on_delete=models.CASCADE)
    reward_category_reference = models.ForeignKey(RewardCategory, null=True, on_delete=models.CASCADE)
    reward_items_reference = models.ForeignKey(RewardItems, null=True, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    extra_note = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return f"Got {self.quantity} {self.reward_items_reference.reward_item} from {self.chest.chest} Chest"
